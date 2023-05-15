import { Component, OnInit } from '@angular/core';
import { ProzAuthService } from 'projects/proz/src/lib/services/proz-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private prozAuthService: ProzAuthService) { }

  ngOnInit() {
    const username = 'benProz';
    const password = '890Berjis*()';
    const token = 'your-token';

    this.prozAuthService.authenticate(username, password, token).subscribe(response => {
      // Handle the response
      
    });
  }
}
