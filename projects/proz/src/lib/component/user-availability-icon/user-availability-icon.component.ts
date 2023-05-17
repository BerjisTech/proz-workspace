import { Component, Input  } from '@angular/core';
import { UserAvailabilityService } from 'projects/proz/src/lib/services/user-availability.service';

@Component({
  selector: 'lib-user-availability-icon',
  templateUrl: './user-availability-icon.component.html',
  styleUrls: ['./user-availability-icon.component.css']
})

export class UserAvailabilityIconComponent {

  @Input() user: any;  // Declare the user input property

  constructor(
    private userAvailabilityService: UserAvailabilityService
  ) { }

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
