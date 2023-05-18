

# Badges Service

## Overview
The Badges Service is responsible for providing image URLs for Plus Membership and Certified Proz Network badges based on a user's membership status. It provides two main methods.

## Functional Requirements
1. `getPlusMembershipBadge(isProzMember: boolean): string | null` - Returns the URL of the Plus Membership badge image if the user is a Proz member, otherwise it returns null.
2. `getCertificationBadge(isCpn: boolean): string | null` - Returns the URL of the Certified Proz Network badge image if the user is a Certified Proz Network member, otherwise it returns null.

## Non-Functional Requirements
1. Usability: The service should return clear and informative URLs for the badges based on the user's membership status.
2. Performance: The service methods should have negligible impact on the application's performance as they are merely returning static values based on a condition.

## Constraints and Assumptions
1. Constraints: This service assumes that the image URLs returned by the methods will always be valid and accessible.
2. Assumptions: The input to the methods will always be a boolean indicating the membership status of the user.

## Error Handling
The methods in this service do not throw errors. They return null if the input boolean value is false.

## Usage Example
```ts
const badgesService = new BadgesService();

// Get Plus Membership Badge URL
const plusMembershipBadgeUrl = badgesService.getPlusMembershipBadge(true);
console.log(plusMembershipBadgeUrl); // 'https://sslcdn.proz.com/zf/images/professional-membership/plus_badge.png'

// Get Certification Badge URL
const certificationBadgeUrl = badgesService.getCertificationBadge(false);
console.log(certificationBadgeUrl); // null

