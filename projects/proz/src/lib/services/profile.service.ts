import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { ProzTokenService } from './proz-token.service';
import { tap } from 'rxjs/operators';
import { ActiveUser, UsersResponse, UserUUIDResponse, ProzTokenResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(
    private http: HttpClient,
    private prozTokenService: ProzTokenService,
  ) { }



  /**
   * 
   * User : Access ProZ.com user accounts.Show/HideList OperationsExpand Operations
   * GET /user
   * Get user data about viewer
   * 
   * GET /users
   * Get a collection of user summaries
   * 
   * GET /users/{uuid}
   * Get a single user summary
   * 
   */

  authenticateUser(proz_client_id: string, redirect_uri: string): string { // Authenticate a user with a username and password.
    redirect_uri = redirect_uri.replace(/\/$/, "");
    let auth_uri = `https://www.proz.com/oauth/authorize?client_id=${proz_client_id}&redirect_uri=${redirect_uri}&response_type=code`;
    return auth_uri;
  }

  /**
   * 
   * CODE=18db1accfcb0d86ff460cb32270b50f55265fd40
   * CLIENT_ID=102123192c77a55c7856b65904fd941e6ac6d081
   * CLIENT_SECRET=c2339accfcb0d86ff460cb32270b50f5526540fd
   * REDIRECT_URI=https://example.com
   * 
   * curl https://www.proz.com/oauth/token \
   * -u $CLIENT_ID:$CLIENT_SECRET \
   * -d "grant_type=authorization_code&amp;code=$CODE&amp;redirect_uri=$REDIRECT_URI"
   */

  getProzToken(code: String, proz_client_id: String, proz_client_secret: String, redirect_uri: String): Observable<any> {
    const data = {
      'grant_type': 'authorization_code',
      'code': code,
      'redirect_uri': redirect_uri
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(proz_client_id + ':' + proz_client_secret)}`
    });
  
    return this.http.post<ProzTokenResponse>(`https://www.proz.com/oauth/token`, data, { headers }).pipe(
      tap(response => {
        this.prozTokenService.setToken(response.access_token); // Use TokenService to store the token
      })
    );
  }
  

  getToken(prozToken: string): string {
    let token = this.prozTokenService.getToken(); // Retrieve the token from ProzTokenService
    return token ? token : prozToken; // Return the token if it exists, otherwise fallback to environment.prozToken
  }

  getActiveUser(token: string): Observable<ActiveUser> { // Get a User object for the currently authenticated user.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<ActiveUser>(`${environment.apiUrl}user`, { headers });
  }

  getUsers(token: string): Observable<UsersResponse> { // Get a collection of UserSummary records from a comma-separated list of UUIDs.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<UsersResponse>(`${environment.apiUrl}users`, { headers });
  }

  getUser(userUuid: String, token: string): Observable<UserUUIDResponse> { // Get a single UserSummary record for a specified UUID.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<UserUUIDResponse>(`${environment.apiUrl}users/${userUuid}`, { headers });
  }

}
