# ProfileService
## Service Description
ProfileService handles the user authentication and profile management operations. This includes authenticating a user, getting a Proz.com token, fetching details of the active user, and managing the users' profile data.

## Methods


### authenticateUser()
`authenticateUser(proz_client_id: string, redirect_uri: string): string`

Generates the URL required for a user to authenticate with ProZ.com.

_Parameters_

1. `proz_client_id`: The ProZ.com client id.
2. `redirect_uri`: The URI to redirect the user after authentication.

_Returns_: The authentication URL.


### getProzToken()
`getProzToken(code: String, proz_client_id: String, proz_client_secret: > String, redirect_uri: String): Observable<any>`

Requests an authentication token from ProZ.com.

_Parameters_
1. `code`: The code returned by the ProZ.com OAuth server.
2. `proz_client_id`: The ProZ.com client id.
3. `proz_client_secret`: The ProZ.com client secret.
4. `redirect_uri`: The URI to redirect the user after authentication.
_Returns_: An observable that emits the token response.


### getToken()
`getToken(prozToken: string): string`

Retrieves the stored ProZ.com token.

_Parameters_
1. `prozToken`: The fallback token if no token is stored.
_Returns_: The stored ProZ.com token, or the provided fallback token if none is stored.


### getActiveUser()
`getActiveUser(token: string): Observable<ActiveUser>`

Fetches the active user's details from the ProZ.com API.

_Parameters_
1. `token`: The ProZ.com token.
_Returns_: An observable that emits the active user's details.


### getUsers()
`getUsers(token: string, uuids: string[]): Observable<UsersResponse>`

Fetches a collection of users' details from the ProZ.com API.

_Parameters_
1. `token`: The ProZ.com token.
2. `uuids`: An array of user UUIDs.
_Returns_: An observable that emits the collection of users' details.
<hr>

### getUser()
`getUser(userUuid: String, token: string): Observable<UserUUIDResponse>`

Fetches a single user's details from the ProZ.com API.

_Parameters_
1. `userUuid`: The user's UUID.
2. `token`: The ProZ.com token.
_Returns_: An observable that emits the user's details.


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

