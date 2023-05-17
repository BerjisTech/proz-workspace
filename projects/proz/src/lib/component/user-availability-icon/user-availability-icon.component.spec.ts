import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserAvailabilityIconComponent } from './user-availability-icon.component';

describe('UserAvailabilityIconComponent', () => {
  let component: UserAvailabilityIconComponent;
  let fixture: ComponentFixture<UserAvailabilityIconComponent>;
  let httpMock: HttpTestingController; // declare httpMock here

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAvailabilityIconComponent],
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
      providers: []
    });
    fixture = TestBed.createComponent(UserAvailabilityIconComponent);
    httpMock = TestBed.inject(HttpTestingController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
