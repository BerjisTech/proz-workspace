import { NgModule } from '@angular/core';
import { ProzComponent } from './proz.component';
import { UserAvailabilityIconComponent } from './component/user-availability-icon/user-availability-icon.component';



@NgModule({
  declarations: [
    ProzComponent,
    UserAvailabilityIconComponent
  ],
  imports: [
  ],
  exports: [
    ProzComponent,
    UserAvailabilityIconComponent
  ]
})
export class ProzModule { }
