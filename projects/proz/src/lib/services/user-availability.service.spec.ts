import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserAvailabilityService } from './user-availability.service';

describe('UserAvailabilityService', () => {
  let service: UserAvailabilityService;
  let httpMock: HttpTestingController; // declare httpMock here

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here  
      providers: [UserAvailabilityService]
    });
    service = TestBed.inject(UserAvailabilityService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
