import { Component } from '@angular/core';
import { ProfileService } from 'projects/proz/src/lib/services/profile.service';
import { UserAvailabilityService } from 'projects/proz/src/lib/services/user-availability.service';

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

  /**
   * *****************************************************
   * Profile Service
   * *****************************************************
   */
  getActiveUser = () => {
    this.profileService.getActiveUser().subscribe(
      response => {
        alert('Get user successful')
        console.log(response)
      },
      error => {
        alert('Get user failed')
        console.log(error)
      }
    )
  }

  getUsers = () => {
    this.profileService.getUsers().subscribe(
      response => {
        alert('Get users successful')
        console.log(response)
      },
      error => {
        alert('Get users failed')
        console.log(error)
      }
    )
  }

  getUser = () => {
    const userUuid = 'b8d6f0d0-0c2a-11eb-9c6e-0242ac130002'
    this.profileService.getUser(userUuid).subscribe(
      response => {
        alert('Get user successful')
        console.log(response)
      },
      error => {
        alert('Get user failed')
        console.log(error)
      }
    )
  }

  /**
   * *****************************************************
   * User Availability Service
   * *****************************************************
   */

  getAvailability = () => {
    const uuid = 'b8d6f0d0-0c2a-11eb-9c6e-0242ac130002'
    this.userAvailabilityService.getAvailability(uuid).subscribe(
      response => {
        alert('Get availability successful')
        console.log(response)
      },
      error => {
        alert('Get availability failed')
        console.log(error)
      }
    )
  }

  getAvailabilityOnDate = () => {
    const uuid = 'b8d6f0d0-0c2a-11eb-9c6e-0242ac130002'
    const date = '2020-10-01'
    this.userAvailabilityService.getAvailabilityOnDate(uuid, date).subscribe(
      response => {
        alert('Get availability on date successful')
        console.log(response)
      },
      error => {
        alert('Get availability on date failed')
        console.log(error)
      }
    )
  }

  setAvailability = () => {
    const uuid = 'b8d6f0d0-0c2a-11eb-9c6e-0242ac130002'
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
    this.userAvailabilityService.setAvailability(uuid, data).subscribe(
      response => {
        alert('Set availability successful')
        console.log(response)
      },
      error => {
        alert('Set availability failed')
        console.log(error)
      }
    )
  }

  setAvailabilityOnDate = () => {
    const uuid = 'b8d6f0d0-0c2a-11eb-9c6e-0242ac130002'
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
    this.userAvailabilityService.setAvailabilityOnDate(uuid, date, data).subscribe(
      response => {
        alert('Set availability on date successful')
        console.log(response)
      },
      error => {
        alert('Set availability on date failed')
        console.log(error)
      }
    )
  }

}
