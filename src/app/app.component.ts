import { Component } from '@angular/core';
import { UserComponentService } from './service/user/user-component.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  showFiller = false;
  menu = [
    {
      icon: "",
      name: "เข้าสู่ระบบ"
    }, {
      icon: "",
      name: "สมัครสมาชิก"
    }
  ];

  constructor(
    private userComponent: UserComponentService
  ) { }

  checkUser(): boolean {
    return false;
  }
}
