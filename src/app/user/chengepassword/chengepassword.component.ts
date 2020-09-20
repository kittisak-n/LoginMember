import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserComponentService } from 'src/app/service/user/user-component.service';
import MD5 from "crypto-js/md5";
@Component({
  selector: 'app-chengepassword',
  templateUrl: './chengepassword.component.html',
  styleUrls: ['./chengepassword.component.scss']
})
export class ChengepasswordComponent implements OnInit {
  password_update: any
  id: any;
  constructor(
    private route: ActivatedRoute,
    private userComponent: UserComponentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
    });
  }

  checkpass() {
    console.log(123)
    let pass = {
      'password': MD5(this.password_update).toString(),
      'id': this.id
    }
    this.userComponent.changepass(pass).subscribe(data => {
      if (data.status) {
        this.router.navigate([''])
      }
    })
  }

}
