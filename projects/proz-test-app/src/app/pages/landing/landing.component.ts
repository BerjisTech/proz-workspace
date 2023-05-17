import { Component } from '@angular/core';
import { ProfileService } from 'projects/proz/src/lib/services/profile.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent {
  constructor(private profileService: ProfileService) { }

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

}
