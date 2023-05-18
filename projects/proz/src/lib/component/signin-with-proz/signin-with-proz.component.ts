import { Component, Input } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'lib-signin-with-proz',
  templateUrl: './signin-with-proz.component.html',
  styleUrls: ['./signin-with-proz.component.css']
})
export class SigninWithProzComponent {

  constructor(
    private profileService: ProfileService
  ) { }
  
  @Input() prozClientId: string = "";
  @Input() prozRedirectUri: string = "";

  authenticate = () => {
    let authUri = this.profileService.authenticateUser(this.prozClientId, this.prozRedirectUri);
    window.open(authUri);
    window.close()
  }

}
