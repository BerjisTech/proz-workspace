import { TestBed } from '@angular/core/testing';
import { BadgesService } from './badges.service';

describe('BadgesService', () => {
  let service: BadgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getPlusMembershipBadge', () => {
    it('should return the Plus Membership Badge URL if the user is a Proz member', () => {
      const result = service.getPlusMembershipBadge(true);
      expect(result).toBe('https://sslcdn.proz.com/zf/images/professional-membership/plus_badge.png');
    });

    it('should return null if the user is not a Proz member', () => {
      const result = service.getPlusMembershipBadge(false);
      expect(result).toBeNull();
    });
  });

  describe('getCertificationBadge', () => {
    it('should return the Certification Badge URL if the user is a Certified Proz Network member', () => {
      const result = service.getCertificationBadge(true);
      expect(result).toBe('https://sslcdn.proz.com/zf/images/proz-nliv-homepage/home-cpn.png');
    });

    it('should return null if the user is not a Certified Proz Network member', () => {
      const result = service.getCertificationBadge(false);
      expect(result).toBeNull();
    });
  });
});
