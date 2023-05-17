import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 
   * @param token 
   * @returns 
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

  getActiveUser(token: string): Observable<any> { // Get a User object for the currently authenticated user.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}user`, { headers });
  }
  getUsers(token: string): Observable<any> { // Get a collection of UserSummary records from a comma-separated list of UUIDs.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}users`, { headers });
  }
  getUser(userUuid: String, token: string): Observable<any> { // Get a single UserSummary record for a specified UUID.
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}users/${userUuid}`, { headers });
  }

  // To get user data
  getUserData(userId: string, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}user/${userId}`, { headers });
  }

  // To update user data
  updateUser(userId: string, updatedData: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${environment.apiUrl}user/${userId}`, updatedData, { headers });
  }

  // To delete profile image
  deleteProfileImage(userId: string, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.delete(`${environment.apiUrl}user/${userId}/image`, { headers });
  }

}
