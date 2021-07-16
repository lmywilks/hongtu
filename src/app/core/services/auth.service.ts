import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_ROOT: string = environment.API_ROOT;

  constructor(private http: HttpClient) { }

  Login(username: string, password: string) {
    return this.http.post(`${ this.API_ROOT }/auth/login`, { username, password });
  }

  Register(username: string, password: string) {
    return this.http.post(`${ this.API_ROOT }/auth/register`, { username, password });
  }
}
