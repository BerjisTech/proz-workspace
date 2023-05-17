import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  getAvailability(uuid: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}availability/${uuid}`);
  }

  getAvailabilityOnDate(uuid: string, date: string): Observable<any> {
    return this.http.get(`${environment.apiUrl}availability/${uuid}/${date}`);
  }

  setAvailabilityOnDate(uuid: string, date: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}availability/${uuid}/${date}`, data);
  }

  setAvailability(uuid: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}availabilities/${uuid}`, data);
  }
}
