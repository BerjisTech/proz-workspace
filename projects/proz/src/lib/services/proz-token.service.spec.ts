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

  describe('setToken', () => {
    it('should store the token', () => {
      service.setToken('mock-token');
      expect(service.getToken()).toBe('mock-token');
    });
  });

  describe('getToken', () => {
    it('should return the stored token', () => {
      service.setToken('another-mock-token');
      expect(service.getToken()).toBe('another-mock-token');
    });

    it('should return null if no token is stored', () => {
      service.setToken('null');
      expect(service.getToken()).toBeNull();
    });
  });
});
