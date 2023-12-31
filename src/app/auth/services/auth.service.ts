import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiServerUrl = environment.apiBaseUrl;
  private currentUser: User;

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<string> {
    return this.http.post(`${this.apiServerUrl}/api/auth/login`, user, { responseType: 'text' });
  }

  public getMe(): Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/api/auth`);
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public setCurrentUser(user: User) {
    this.currentUser = user;
  }
}
