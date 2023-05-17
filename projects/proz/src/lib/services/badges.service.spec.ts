import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BadgesService } from './badges.service';

describe('BadgesService', () => {
  let service: BadgesService;
  let httpMock: HttpTestingController; // declare httpMock here

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule here
      providers: [BadgesService]
    });
    service = TestBed.inject(BadgesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
