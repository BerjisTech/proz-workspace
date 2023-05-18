import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'projects/proz/src/lib/services/profile.service';
import { UserAvailabilityService } from 'projects/proz/src/lib/services/user-availability.service';
import { environment } from 'projects/proz-test-app/src/environment/environment';
import { WorkingHours, DayAvailability, User, ActiveUser, UserUUIDResponse, UsersResponse, DayAvailabilityResponse, AvailabilityResponse, Availability } from 'projects/proz/src/lib/interfaces/user.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  constructor(
    private profileService: ProfileService,
    private userAvailabilityService: UserAvailabilityService
  ) { }

  user: string = "";
  userData = {} as User | ActiveUser | UserUUIDResponse | UsersResponse;
  availabilityData = {} as WorkingHours | DayAvailability | DayAvailabilityResponse | AvailabilityResponse | DayAvailabilityResponse[] | Availability;
  prozToken = environment.production ? environment.prod_proz_token : environment.dev_proz_token;
  prozClientId = environment.production ? environment.prod_proz_client_id : environment.dev_proz_client_id;
  prozRedirectUri = environment.production ? environment.prod_redirect_uri : environment.dev_redirect_uri;
  prozClientSecret = environment.production ? environment.prod_proz_client_secret : environment.dev_proz_client_secret;
  prozTestUuid = environment.production ? environment.prod_proz_test_uuid : environment.dev_proz_test_uuid;


  ngOnInit() {
    this.prozToken = this.profileService.getToken(this.prozToken); // Retrieve the token
    this.getProzToken();
  }

  /**
   * *****************************************************
   * Profile Service
   * *****************************************************
   */

  authenticate = () => {
    let authUri = this.profileService.authenticateUser(this.prozClientId, this.prozRedirectUri);
    window.open(authUri);
    window.close()
  }


  getProzToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code != null) {
      this.profileService.getProzToken(code, this.prozClientId, this.prozClientSecret, this.prozRedirectUri).subscribe(
        response => {
          this.userData = response;
          this.prozToken = this.profileService.getToken(this.prozToken);
        },
        error => {
          this.userData = error;
        }
      );
    }
  }


  getActiveUser = () => {
    this.profileService.getActiveUser(this.prozToken).subscribe(
      (response: ActiveUser) => {
        this.userData = response;
      },
      (error: any) => {
        this.userData = error
      }
    )
  }

  getUsers = () => {
    this.profileService.getUsers(this.prozToken).subscribe(
      (response: UsersResponse) => {
        this.userData = response;
      },
      (error: any) => {
        this.userData = error
      }
    )
  }

  getUser = () => {
    const userUuid = this.prozTestUuid
    this.profileService.getUser(userUuid, this.prozToken).subscribe(
      (response: UserUUIDResponse) => {
        this.userData = response;
      },
      (error: any) => {
        this.userData = error
      }
    )
  }

  /**
   * *****************************************************
   * User Availability Service
   * *****************************************************
   */

  getAvailability = () => {
    const uuid = this.prozTestUuid
    this.userAvailabilityService.getAvailability(uuid, this.prozToken).subscribe(
      (response: AvailabilityResponse) => {
        this.availabilityData = response

      },
      (error: any) => {
        this.availabilityData = error

      }
    )
  }

  getAvailabilityOnDate = () => {
    const uuid = this.prozTestUuid
    const date = '2020-10-01'
    this.userAvailabilityService.getAvailabilityOnDate(uuid, date, this.prozToken).subscribe(
      (response: DayAvailabilityResponse) => {
        this.availabilityData = response
      },
      (error: any) => {
        this.availabilityData = error
      }
    )
  }

  setAvailability = () => {
    const uuid = this.prozTestUuid
    const data: Availability = {
      available: true,
      hours: [
        {
          start: "09:00",
          end: "18:00"
        }
      ]
    }

    this.userAvailabilityService.setAvailability(uuid, data, this.prozToken).subscribe(
      (response: DayAvailabilityResponse[]) => {
        this.availabilityData = response
      },
      (error: any) => {
        this.availabilityData = error
      }
    )
  }

  setAvailabilityOnDate = () => {
    const uuid = this.prozTestUuid
    const date = '2020-10-01';
    const data: Availability = {
      available: true,
      hours: [
        {
          start: "09:00",
          end: "18:00"
        }
      ]
    };

    this.userAvailabilityService.setAvailabilityOnDate(uuid, date, data, this.prozToken).subscribe(
      (response: DayAvailabilityResponse) => {
        this.availabilityData = response
      },
      (error: any) => {
        this.availabilityData = error
      }
    )
  }

}
