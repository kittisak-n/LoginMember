import { Component, Input, OnInit } from '@angular/core';
import MD5 from "crypto-js/md5";
import { UserComponentService } from 'src/app/service/user/user-component.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user_id: any;
  password: any;

  constructor(
    private userComponent: UserComponentService
  ) { }

  ngOnInit(): void {
    console.log(MD5("Message").toString());
  }

  login(): void {
    console.log(this.user_id, this.password)
  }

}
