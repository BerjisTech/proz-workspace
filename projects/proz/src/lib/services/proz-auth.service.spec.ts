import { TestBed } from '@angular/core/testing';

import { ProzAuthService } from './proz-auth.service';

describe('ProzAuthService', () => {
  let service: ProzAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProzAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
