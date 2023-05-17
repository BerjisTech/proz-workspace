import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getActiveUser(): Observable<any> { // Get a User object for the currently authenticated user.
    return this.http.get(`${environment.apiUrl}user`);
  }
  getUsers(): Observable<any> { // Get a collection of UserSummary records from a comma-separated list of UUIDs.
    return this.http.get(`${environment.apiUrl}users`);
  }
  getUser(userUuid: String): Observable<any> { // Get a single UserSummary record for a specified UUID.
    return this.http.get(`${environment.apiUrl}users/${userUuid}`);
  }

  // To get user data
  getUserData(userId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}user/${userId}`);
  }

  // To update user data
  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}user/${userId}`, updatedData);
  }

  // To delete profile image
  deleteProfileImage(userId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}user/${userId}/image`);
  }

}
