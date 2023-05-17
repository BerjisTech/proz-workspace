import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProzTokenService {
  private token: string | null = null;

  setToken(token: string): void {
    this.token = token;
  }

  getToken(): string | null {
    return this.token;
  }
}
