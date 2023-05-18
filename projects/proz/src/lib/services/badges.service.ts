import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor() { }

  getPlusMembershipBadge = (isProzMember: boolean) => {
    return isProzMember ? 'https://sslcdn.proz.com/zf/images/professional-membership/plus_badge.png' : null;
  }

  getCertificationBadge = (isCpn: boolean) => {
    return isCpn ? 'https://sslcdn.proz.com/zf/images/proz-nliv-homepage/home-cpn.png' : null;
  }

}
