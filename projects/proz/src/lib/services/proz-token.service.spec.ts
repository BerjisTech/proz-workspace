import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProfileService } from './profile.service';
import { ProzTokenService } from './proz-token.service';
import { ActiveUser, UsersResponse } from '../interfaces/user.interface';
import { environment } from '../../environment/environment';
import { UserUUIDResponse } from '../interfaces/user.interface';

describe('ProfileService', () => {
  let service: ProfileService;
  let httpTestingController: HttpTestingController;
  let prozTokenService: ProzTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProzTokenService]
    });

    service = TestBed.inject(ProfileService);
    httpTestingController = TestBed.inject(HttpTestingController);
    prozTokenService = TestBed.inject(ProzTokenService);
  });

  afterEach(() => {
    httpTestingController.verify(); // Ensures that all requests have been handled
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  // authenticateUser(proz_client_id: string, redirect_uri: string): string { // Authenticate a user with a username and password.
  //   redirect_uri = redirect_uri.replace(/\/$/, "");
  //   let auth_uri = `https://www.proz.com/oauth/authorize?client_id=${proz_client_id}&redirect_uri=${redirect_uri}&response_type=code`;
  //   return auth_uri;
  // }

  describe('authenticateUser', () => {
    it('should return the expected authentication uri', () => {
      const expectedResponse = 'https://www.proz.com/oauth/authorize?client_id=mock-client-id&redirect_uri=mock-redirect-uri&response_type=code';

      const actualResponse = service.authenticateUser('mock-client-id', 'mock-redirect-uri');
      expect(actualResponse).toEqual(expectedResponse);
    });
  });

  describe('getProzToken', () => {
    it('should return the expected token and store it using ProzTokenService', () => {
      const mockResponse = { access_token: 'mock-token' };

      service.getProzToken('mock-code', 'mock-client-id', 'mock-client-secret', 'mock-uri').subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const request = httpTestingController.expectOne('https://www.proz.com/oauth/token');
      expect(request.request.method).toBe('POST');
      request.flush(mockResponse);

      const token = prozTokenService.getToken();
      expect(token).toBe(mockResponse.access_token);
    });
  });

  describe('getToken', () => {
    it('should return the expected token', () => {
      expect(service.getToken('mock-token')).toBe('mock-token');
    });
  });

  describe('getActiveUser', () => {
    it('should return the expected user data', () => {
      const mockResponse: ActiveUser = {
        uuid: 'mock-uuid',
        site_name: 'mock-site-name',
        account_type: 1,
        email: 'mock-email',
        profile_url: 'mock-profile-url',
        contact_info: {
          first_name: 'mock-first-name',
          middle_name: 'mock-middle-name',
          last_name: 'mock-last-name',
          email: 'mock-email'
        },
        proz_membership: {
          status: 'mock-status',
          expiration_date: 'mock-expiration-date',
          expired_date: 'mock-expired-date',
          certified_pro_network_status: 'mock-certified-pro-network-status',
          plus_package: true,
          membership_type: 'mock-membership-type',
          membership_package: 'mock-membership-package'
        },
        employers: [
          {
            business_id: 1,
            business_name: 'mock-business-name',
            business_membership_package: 'mock-business-membership-package',
            business_membership_expiration_date: 'mock-business-membership-expiration-date',
            lwa_avg_five_year: 1,
            lwa_num_entries_five_year: 1,
            jobs_posted_12_months: 1,
            business_link: 'mock-business-link',
            self_link: 'mock-self-link',
            is_employee: true,
            employee_title: 'mock-employee-title',
            employee_is_admin: true
          }
        ]
      };

      service.getActiveUser('mock-token').subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const req = httpTestingController.expectOne(`${environment.apiUrl}user`);
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
    });
  });


  describe('getUsers', () => {
    it('should return the expected users data', () => {
      const mockResponse: UsersResponse = {
        users: [
          {
            self_link: 'mock-self-link',
            uuid: 'mock-uuid',
            date_registered: 'mock-date-registered',
            site_name: 'mock-site-name',
            account_type: 1,
            freelancer_profile_link: 'mock-freelancer-profile-link',
            profile_url: 'mock-profile-url',
            image_url: 'mock-image-url',
            is_proz_member: true,
            proz_membership_type: 'mock-proz-membership-type',
            is_id_verified: true,
            is_cpn: true,
            cpn_language_pair: 'mock-cpn-language-pair',
            native_languages: ['mock-native-language', 'mock-native-language-alt'],
            timezone: 'mock-timezone',
            country: 'mock-country',
            skype: 'mock-skype',
          }
        ]
      };

      service.getUsers('mock-token', ['mock-uuid', 'mock-uuid-alt']).subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const request = httpTestingController.expectOne(`${environment.apiUrl}users?uuids=mock-uuid,mock-uuid-alt`);
      request.flush(mockResponse);
    });
  });

  describe('getUserUUID', () => {
    it('should return the expected user uuid', () => {
      const mockResponse: UserUUIDResponse = {
        user: {
          self_link: 'mock-self-link',
          uuid: 'mock-uuid',
          date_registered: 'mock-date-registered',
          site_name: 'mock-site-name',
          account_type: 1,
          freelancer_profile_link: 'mock-freelancer-profile-link',
          profile_url: 'mock-profile-url',
          image_url: 'mock-image-url',
          is_proz_member: true,
          proz_membership_type: 'mock-proz-membership-type',
          is_id_verified: true,
          is_cpn: true,
          cpn_language_pair: 'mock-cpn-language-pair',
          native_languages: ['mock-native-language', 'mock-native-language-alt'],
          timezone: 'mock-timezone',
          country: 'mock-country',
          skype: 'mock-skype',
        }
      };

      service.getUser('mock-uuid', 'mock-token').subscribe(response => {
        expect(response).toEqual(mockResponse);
      });

      const request = httpTestingController.expectOne(`${environment.apiUrl}users/mock-uuid`);
      expect(request.request.method).toBe('GET');
      request.flush(mockResponse);
    });
  });

});
