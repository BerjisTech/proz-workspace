import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'projects/proz/src/lib/services/profile.service';
import { UserAvailabilityService } from 'projects/proz/src/lib/services/user-availability.service';
import { environment } from 'projects/proz-test-app/src/environment/environment';

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
  userData: any;
  availabilityData: any;
  prozToken: string = "";
  prozClientId = environment.proz_client_id;
  prozRedirectUri = environment.redirect_uri;


  ngOnInit() {
    this.prozToken = this.profileService.getToken(environment.prozToken); // Retrieve the token
    this.getProzToken();
  }

  /**
   * *****************************************************
   * Profile Service
   * *****************************************************
   */

  authenticate = () => {
    let authUri = this.profileService.authenticateUser(environment.proz_client_id, environment.redirect_uri);
    window.open(authUri);
    window.close()
  }


  getProzToken = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
  
    if (code != null) {
      this.profileService.getProzToken(code, environment.proz_client_id, environment.proz_client_secret, environment.redirect_uri).subscribe(
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
      response => {
        this.userData = response;

      },
      error => {
        this.userData = error

      }
    )
  }

  getUsers = () => {
    this.profileService.getUsers(this.prozToken).subscribe(
      response => {
        this.userData = response;

      },
      error => {
        this.userData = error

      }
    )
  }

  getUser = () => {
    const userUuid = environment.testUuid
    this.profileService.getUser(userUuid, this.prozToken).subscribe(
      response => {
        this.userData = response;

      },
      error => {
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
    const uuid = environment.testUuid
    this.userAvailabilityService.getAvailability(uuid, this.prozToken).subscribe(
      response => {
        this.availabilityData = response

      },
      error => {
        this.availabilityData = error

      }
    )
  }

  getAvailabilityOnDate = () => {
    const uuid = environment.testUuid
    const date = '2020-10-01'
    this.userAvailabilityService.getAvailabilityOnDate(uuid, date, this.prozToken).subscribe(
      response => {
        this.availabilityData = response

      },
      error => {
        this.availabilityData = error

      }
    )
  }

  setAvailability = () => {
    const uuid = environment.testUuid
    const data = {
      "availability": [
        {
          "date": "2020-10-01",
          "available": true,
          "hours": [
            {
              "start": "09:00",
              "end": "18:00"
            }
          ]
        }
      ]
    }
    this.userAvailabilityService.setAvailability(uuid, data, this.prozToken).subscribe(
      response => {
        this.availabilityData = response

      },
      error => {
        this.availabilityData = error

      }
    )
  }

  setAvailabilityOnDate = () => {
    const uuid = environment.testUuid
    const date = '2020-10-01'
    const data = {
      "available": true,
      "hours": [
        {
          "start": "09:00",
          "end": "18:00"
        }
      ]
    }
    this.userAvailabilityService.setAvailabilityOnDate(uuid, date, data, this.prozToken).subscribe(
      response => {
        this.availabilityData = response

      },
      error => {
        this.availabilityData = error

      }
    )
  }

}
