import { Component } from '@angular/core';



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

}
