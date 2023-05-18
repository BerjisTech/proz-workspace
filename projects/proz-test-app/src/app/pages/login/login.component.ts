import { Component, EventEmitter, Output } from '@angular/core';
import { ProfileService } from 'projects/proz/src/lib/services/profile.service';
import { environment } from 'projects/proz-test-app/src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() loginFailure = new EventEmitter<void>();

  constructor(private profileService: ProfileService) { }

}
