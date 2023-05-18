import { NgModule } from '@angular/core';
import { ProzComponent } from './proz.component';
import { UserAvailabilityIconComponent } from './component/user-availability-icon/user-availability-icon.component';
import { SigninWithProzComponent } from './component/signin-with-proz/signin-with-proz.component';



@NgModule({
  declarations: [
    ProzComponent,
    UserAvailabilityIconComponent,
    SigninWithProzComponent
  ],
  imports: [
  ],
  exports: [
    ProzComponent,
    UserAvailabilityIconComponent,
    SigninWithProzComponent
  ]
})
export class ProzModule { }
