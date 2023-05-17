import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAvailabilityService {

  constructor(private http: HttpClient) { }

  /**
   * 
   * Availability : Access translators' indication of their availability to take on new work.Show/HideList OperationsExpand Operations
   * 
   * @param uuid
   * @param date
   * 
   * GET /availability/{uuid}
   * Get availability for user
   * 
   * GET /availability/{uuid}/{date}
   * Get availability for user on given day
   * 
   * PUT /availability/{uuid}/{date}
   * Set availability for user on given day
   * 
   * PUT /availabilities/{uuid}
   * Set availability for multiple days
   * 
   **/

  getAvailability(uuid: string, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}availability/${uuid}`, { headers });
  }

  getAvailabilityOnDate(uuid: string, date: string, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${environment.apiUrl}availability/${uuid}/${date}`, { headers });
  }

  setAvailabilityOnDate(uuid: string, date: string, data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${environment.apiUrl}availability/${uuid}/${date}`, data, { headers });
  }

  setAvailability(uuid: string, data: any, token: any): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.put(`${environment.apiUrl}availabilities/${uuid}`, data, { headers });
  }
}
