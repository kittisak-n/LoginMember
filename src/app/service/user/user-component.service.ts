import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserComponentService {

  getuserLogin: boolean;

  constructor() { }

  checklogin(): void {
    console.log(123)
  }
}
