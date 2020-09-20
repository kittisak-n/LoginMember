import { Component, OnInit } from '@angular/core';
import { UserComponentService } from 'src/app/service/user/user-component.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  text_name: any;
  constructor(
    private userComponent: UserComponentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  Verify() {
    console.log(this.text_name)
    let user = {
      'username': this.text_name,
      'email': this.text_name
    }

    this.userComponent.Verify(user).subscribe(data => {
      if (data.status) {
        this.router.navigate([''])
      }
    });
  }


}
