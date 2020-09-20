import { Component, OnInit } from '@angular/core';
import { UserComponentService } from 'src/app/service/user/user-component.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import MD5 from "crypto-js/md5";

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.scss']
})
export class RegisComponent implements OnInit {
  first_name: any;
  last_name: any;
  user_name: any;
  email: any;
  password: any;
  confirm_password: any;

  constructor(
    private userComponent: UserComponentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }


  checkregis(): void {
    if (!this.first_name || !this.last_name || !this.user_name || !this.email || !this.password || !this.confirm_password) {

    } else {
      if (this.password == this.confirm_password) {
        this.regis();
      }
    }
  }

  async regis() {

    
    let user = {
      "name": this.first_name,
      "surname": this.last_name,
      "username": this.user_name,
      "email": this.email,
      "password": MD5(this.password).toString(),
    }


    this.userComponent.regis(user).subscribe(data => {
      console.log(data)
      if (data.status) {
        this.router.navigate(['user'])
      }
    })
  }
}

