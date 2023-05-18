import { Component, Input  } from '@angular/core';
import { UserAvailabilityService } from 'projects/proz/src/lib/services/user-availability.service';
import { ProzTokenService } from '../../services/proz-token.service';
import { Availability, DayAvailabilityResponse } from '../../interfaces/user.interface';

@Component({
  selector: 'lib-user-availability-icon',
  templateUrl: './user-availability-icon.component.html',
  styleUrls: ['./user-availability-icon.component.css']
})

export class UserAvailabilityIconComponent {

  @Input() user: any;  // Declare the user input property

  constructor(
    private userAvailabilityService: UserAvailabilityService,
    private prozTokenService: ProzTokenService
  ) { }

  prozToken = this.prozTokenService.getToken(); // Retrieve the token

  /**
     * *****************************************************
     * User Availability Service
     * *****************************************************
     */

  getAvailability = () => {
    const uuid = 'b8d6f0d0-0c2a-11eb-9c6e-0242ac130002'
    this.userAvailabilityService.getAvailability(uuid, this.prozToken).subscribe(
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
    this.userAvailabilityService.getAvailabilityOnDate(uuid, date, this.prozToken).subscribe(
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

  setAvailability = (uuid: string) => {
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
        console.log(response)
      },
      (error: any) => {
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
    this.userAvailabilityService.setAvailabilityOnDate(uuid, date, data, this.prozToken).subscribe(
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
