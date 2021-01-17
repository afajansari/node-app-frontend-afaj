import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ROO_URL = 'http://localhost:4000/api/user';

  constructor(private http: HttpClient) {}
  // tslint:disable-next-line: typedef
  register(user: any){
    return this.http.post<any>(`${this.ROO_URL}/register`, user);
  }
  // tslint:disable-next-line: typedef
  login(user: any){
    return this.http.post<any>(`${this.ROO_URL}/login`, user);
  }
}
