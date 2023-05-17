import { Component } from '@angular/core';
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

  public user: string = "";  // Declare the user input property
  public userData: any; // use the appropriate type here instead of 'any' if known
  public availabilityData: any; // use the appropriate type here instead of 'any' if known

  /**
   * *****************************************************
   * Profile Service
   * *****************************************************
   */
  getActiveUser = () => {
    this.profileService.getActiveUser(environment.prozToken).subscribe(
      response => {
        this.userData = response;

      },
      error => {
        this.userData = error

      }
    )
  }

  getUsers = () => {
    this.profileService.getUsers(environment.prozToken).subscribe(
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
    this.profileService.getUser(userUuid, environment.prozToken).subscribe(
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
    this.userAvailabilityService.getAvailability(uuid, environment.prozToken).subscribe(
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
    this.userAvailabilityService.getAvailabilityOnDate(uuid, date, environment.prozToken).subscribe(
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
    this.userAvailabilityService.setAvailability(uuid, data, environment.prozToken).subscribe(
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
    this.userAvailabilityService.setAvailabilityOnDate(uuid, date, data, environment.prozToken).subscribe(
      response => {
        this.availabilityData = response

      },
      error => {
        this.availabilityData = error

      }
    )
  }

}
