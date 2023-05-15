import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProzAuthService {
  private apiUrl = 'https://api.proz.com/v2/';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string, token: string): Observable<any> {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    return this.http.post(this.apiUrl, { username, password }, { headers });
  }
}
