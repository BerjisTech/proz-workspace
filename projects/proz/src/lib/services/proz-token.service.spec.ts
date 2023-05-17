import { TestBed } from '@angular/core/testing';

import { ProzTokenService } from './proz-token.service';

describe('ProzTokenService', () => {
  let service: ProzTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProzTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
