import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserComponentService } from 'src/app/service/user/user-component.service';
import MD5 from "crypto-js/md5";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user_id: any;
  password: any;
  count_login = 0;
  constructor(
    private userComponent: UserComponentService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  checklogin(): void {
    if (!this.user_id || !this.password) {
    } else {
      this.login();
    }
  }

  login(): void {
    let user_login = {
      'username': this.user_id,
      'password': MD5(this.password).toString()
    }
    this.userComponent.login(user_login).subscribe(data => {
      if (data.status) {
        if (data.massage === 'login success') {
          this.router.navigate(['home'])
        } else {
          this.count_login++;
        }
      } else {
        console.log('not found');
      }
    })
  }

  



}
