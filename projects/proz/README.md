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

## ProfileService Usage Example

The `ProfileService` provides various methods to interact with user profiles. Below are the examples of how you can use this service.

### Step 1: Import the ProfileService

First, import the `ProfileService` into the component where you want to use it.

```typescript
import { ProfileService } from './profile.service';
```

### Step 2: Inject the ProfileService
Inject the ProfileService into your component's constructor.

```typescript
constructor(private profileService: ProfileService) { }
```
### Step 3: Use the ProfileService
Now you can use the methods provided by ProfileService in your component.

```typescript
this.profileService.authenticateUser('client-id', 'redirect-uri').subscribe(response => {
  console.log(response);  // Prints the authentication URL
});

this.profileService.getProzToken('code', 'client-id', 'client-secret', 'uri').subscribe(response => {
  console.log(response);  // Prints the received token
});

console.log(this.profileService.getToken('token'));  // Prints the token

this.profileService.getActiveUser('token').subscribe(response => {
  console.log(response);  // Prints the active user's data
});

this.profileService.getUsers('token', ['uuid1', 'uuid2']).subscribe(response => {
  console.log(response);  // Prints the users' data
});

this.profileService.getUser('uuid', 'token').subscribe(response => {
  console.log(response);  // Prints the user's data
});
```

_Remember, these methods are asynchronous, so they should be used within an Observable context, as shown above. You can also use async-await syntax if you prefer._

_Remember to replace placeholders like 'client-id', 'redirect-uri', 'code', 'client-secret', 'uri', 'token', 'uuid1', 'uuid2', and 'uuid' with your actual values._


# UserAvailabilityService Documentation
`UserAvailabilityService` is a service class in Angular that helps in managing a user's availability. This class has several methods that allow us to interact with an API for fetching and updating the availability of a user.

## Methods
### getAvailability()
`getAvailability(uuid: string, token: any): Observable<AvailabilityResponse>`

This method fetches the user availability from the API. It takes the uuid of the user and a token for authentication as parameters and returns an Observable that will emit the user availability.

_Usage_
```typescript
let uuid = 'user-uuid'; 
let token = 'auth-token'; 
userAvailabilityService.getAvailability(uuid, token).subscribe(
    availability => { 
        console.log(availability); 
    }
);
```

### getAvailabilityOnDate()
`getAvailabilityOnDate(uuid: string, date: string, token: any): Observable<DayAvailabilityResponse>`

This method fetches the user availability for a specific date from the API. It takes the uuid of the user, a date string in `YYYY-MM-DD` format, and a token for authentication as parameters and returns an Observable that will emit the user availability for the specific date.

_Usage_
```typescript
let uuid = 'user-uuid'; 
let date = '2023-05-18'; 
let token = 'auth-token'; 
userAvailabilityService.getAvailabilityOnDate(uuid, date, token).subscribe(
    availability => { 
        console.log(availability); 
    }
);
```

### setAvailabilityOnDate()
`setAvailabilityOnDate(uuid: string, date: string, data: Availability, token: any): Observable<DayAvailabilityResponse>`

This method updates the user availability for a specific date on the API. It takes the uuid of the user, a date string in `YYYY-MM-DD` format, an Availability object that represents the new availability data, and a token for authentication as parameters and returns an Observable that will emit the updated user availability for the specific date.

_Usage_
```typescript
let uuid = 'user-uuid'; 
let date = '2023-05-18'; 
let availability: Availability = {/* availability data */}; 
let token = 'auth-token'; userAvailabilityService.setAvailabilityOnDate(uuid, date, availability, token).subscribe(
    updatedAvailability => { 
    console.log(updatedAvailability); 
    }
);
```

### setAvailability()
`setAvailability(uuid: string, data: Availability, token: any): Observable<DayAvailabilityResponse[]>`

This method updates the user availability for multiple dates on the API. It takes the uuid of the user, an Availability object that represents the new availability data, and a token for authentication as parameters and returns an Observable that will emit an array of the updated user availability for the specific dates.

_Usage_
```typescript
let uuid = 'user-uuid'; 
let availability: Availability = {/* availability data for multiple dates */}; 
let token = 'auth-token'; 
userAvailabilityService.setAvailability(uuid, availability, token).subscribe(
    updatedAvailabilities => { 
        console.log(updatedAvailabilities); 
    }
);
```


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
```typescript
const badgesService = new BadgesService();

// Get Plus Membership Badge URL
const plusMembershipBadgeUrl = badgesService.getPlusMembershipBadge(true);
console.log(plusMembershipBadgeUrl); // 'https://sslcdn.proz.com/zf/images/professional-membership/plus_badge.png'

// Get Certification Badge URL
const certificationBadgeUrl = badgesService.getCertificationBadge(false);
console.log(certificationBadgeUrl); // null
```

# ProzTokenService

## Overview
`ProzTokenService` is an Angular service that manages the state of a single token in memory. This service can be used to set and get the token value.

## Usage
To use this service, it should be injected in a component or another service.

### setToken
This method is used to set the token in memory.

```typescript
prozTokenService.setToken('your-token-value');
```

### getToken
This method is used to retrieve the token from memory.

```typescript
const token = prozTokenService.getToken();
```

### Testing
This service is tested to ensure that `setToken` correctly stores a token value and `getToken` correctly retrieves the stored token. Additionally, it tests the scenario when no token is set or the token is explicitly set to `null`, `getToken` should return `null`.