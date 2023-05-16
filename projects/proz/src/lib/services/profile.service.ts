import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  // To get user data
  getUserData(userId: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}api/user/${userId}`);
  }

  // To update user data
  updateUser(userId: string, updatedData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}api/user/${userId}`, updatedData);
  }

  // To delete profile image
  deleteProfileImage(userId: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}api/user/${userId}/image`);
  }

}
