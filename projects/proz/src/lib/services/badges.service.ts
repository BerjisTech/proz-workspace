import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  constructor() { }

  getPlusMembershipBadge = (plusMembership: string) => {
    return plusMembership && 'https://sslcdn.proz.com/zf/images/professional-membership/plus_badge.png'
  }

  getCertificationBadge = (certification: string) => {
    return certification && 'https://sslcdn.proz.com/zf/images/proz-nliv-homepage/home-cpn.png'
  }

}
