import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProzAuthService {
  private apiUrl = 'https://proz.com/api/v1/authentication';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post(this.apiUrl, { username, password }, { headers });
  }
}
