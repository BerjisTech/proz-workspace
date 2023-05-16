import { Component, EventEmitter, Output } from '@angular/core';
import { ProzAuthService } from 'projects/proz/src/lib/services/proz-auth.service';
import { environment } from 'projects/proz-test-app/src/environment/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Output() loginSuccess = new EventEmitter<void>();
  @Output() loginFailure = new EventEmitter<void>();

  constructor(private prozAuthService: ProzAuthService) { }

  userAuth = () => {
    const username = 'benProz'
    const password = '890Berjis*()'
    const token = environment.prozToken

    this.prozAuthService.authenticate(username, password, token).subscribe(
      response => {
        alert('Login successful')
        console.log(response)
        // Handle the response
        this.loginSuccess.emit();
      },
      error => {
        alert('Login failed')
        console.log(error)
        // Emit an event on login failure
        this.loginFailure.emit()
      }
    );
  }
}
