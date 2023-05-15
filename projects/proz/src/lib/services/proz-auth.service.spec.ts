import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProzAuthService } from './proz-auth.service';

describe('ProzAuthService', () => {
  let service: ProzAuthService;
  let httpMock: HttpTestingController; // declare httpMock here

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
      providers: [ProzAuthService]
    });
    service = TestBed.inject(ProzAuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
