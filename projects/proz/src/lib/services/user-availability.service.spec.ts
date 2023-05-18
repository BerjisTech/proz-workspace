import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environment/environment';
import { UserAvailabilityService } from './user-availability.service';
import { AvailabilityResponse } from '../interfaces/user.interface';

describe('UserAvailabilityService', () => {
  let service: UserAvailabilityService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserAvailabilityService],
    });

    service = TestBed.inject(UserAvailabilityService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Make sure that there are no outstanding requests.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch user availability', () => {
    const mockResponse: AvailabilityResponse = {
      working_hours: {
        self_link: 'mock-self-link',
        user: 'mock-user',
        workday_start: 'mock-workday-start',
        workday_end: 'mock-workday-end',
        opted_out: false,
        available_off_hours: false,
        available_weekends: false
      },
      days_availability: [{
        self_link: 'mock-self-link',
        user: 'mock-user',
        date: 'mock-date',
        availability: {
          available: false,
          hours: [
            {
              start: 'mock-start',
              end: 'mock-end'
            }
          ]
        }
      }]
    };
    const mockUuid = 'mock-uuid';
    const mockToken = 'mock-token';

    service.getAvailability(mockUuid, mockToken).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    const request = httpTestingController.expectOne(`${environment.apiUrl}availability/${mockUuid}`);
    expect(request.request.method).toBe('GET');
    request.flush(mockResponse);
  });

  // Repeat the pattern for each method:
  // getAvailabilityOnDate, setAvailabilityOnDate, setAvailability

});

