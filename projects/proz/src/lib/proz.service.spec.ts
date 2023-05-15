import { TestBed } from '@angular/core/testing';

import { ProzService } from './proz.service';

describe('ProzService', () => {
  let service: ProzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
