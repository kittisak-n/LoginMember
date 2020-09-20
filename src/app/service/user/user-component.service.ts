import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const api = 'http://127.0.0.1:8080';

@Injectable({
  providedIn: 'root'
})
export class UserComponentService {

  getuserLogin: boolean;

  constructor(
    private http: HttpClient,

  ) { }

  checklogin(): void {

  }


  login(user_login: any) {
    return this.http.post<any>(`${api}/login`, user_login);
  }

  regis(user: any) {
    return this.http.post<any>(`${api}/register`, user);
  }

  get_user(search: any): any {
    return this.http.post<any>(`${api}/users`, search);
  }

  delete(user_id) {
    return this.http.post<any>(`${api}/users/delete`, user_id);
  }

  Verify(user: any) {
    console.log(user)
    return this.http.post<any>(`${api}/login/forgot`, user)
  }

  changepass(pass: any) {
    return this.http.post<any>(`${api}/users/update`, pass)
  }
}
