import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProzAuthService {
  private apiUrl = `${environment.apiUrl}user`

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post(this.apiUrl, { username, password }, { headers });
  }
}

/*
 * Refer https://www.proz.com/api-docs-new/#authentication for token generation
 *
 * Request:
 * curl https://www.proz.com/oauth/token \
 *    -u f45664cfa9e1a2b6a8e74f731b954fff13624fce:42bf68b259e6ca758be3663db01d22ab482020c6 \
 *    -d "grant_type=client_credentials" \
 *    -d "scope=public+user.email"
 *
 * Response:
 * {
 *   "access_token":"725caaba2ea8aaa364b91c5e1fbfbd132c9ed8f6",
 *   "expires_in":1209600,
 *   "token_type":"Bearer",
 *   "scope":"public"
 * } 
*/

/*
 * Refer https://www.proz.com/api-docs-new/#sign-in-with-proz-com for Signin With ProZ.com
 *
 * In the example above, you've already added user.email to the authorization scope of your token.
 * 
 * With the provided token, you can now make GET requests to /user
 * There are additional resources on what to do with the api here: https://www.proz.com/api-docs-new/#resources
 * 
*/
