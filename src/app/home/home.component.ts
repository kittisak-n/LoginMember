import { Component, OnInit } from '@angular/core';
import { UserComponentService } from 'src/app/service/user/user-component.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loop: any = [];
  Pagenav: any = [];
  page_num = 0;
  serach_text: any;
  mouth: any;

  constructor(
    private userComponent: UserComponentService,
  ) { }

  ngOnInit(): void {
    this.loaddata_page();
  }

  loaddata_page() {
    let find = {
      text: this.serach_text,
      mouth: this.mouth
    }
    this.userComponent.get_user(find).subscribe(data => {
      this.Pagenav = [];
      for (let i = 0; i <= data.length / 10; i++) {
        let page = {
          number: i + 1,
          start: (i * 10) + 1,
          end: 10 * (i + 1),
        }
        this.Pagenav.push(page)
      }
      this.loaddata();
    });
  }



  loaddata(): void {
    let find = {
      text: this.serach_text,
      mouth: this.mouth
    }
    this.userComponent.get_user(find).subscribe(data => {
      this.loop = [];
      data.forEach((ele, index) => {
        if (index + 1 <= this.Pagenav[this.page_num].end && this.Pagenav[this.page_num].start <= index + 1) {
          let data_loop = {
            index: index + 1,
            name: ele.name,
            username: ele.username,
            id: ele.id,
            email: ele.email,
            date_create: ele.date_create,
            modifly: ele.modifly
          }
          this.loop.push(data_loop)
        }
      })
    });
  }

  changedate(data: string): any {
    if (data) {
      let date = data.split("-");
      return date[2] + '/' + date[1] + '/' + date[0]
    } else {
      return 'ยังไม่มีการเปลี่ยนแปลง';
    }
  }

  delete(user_id: any) {
    let id = {
      'id': user_id
    }
    this.userComponent.delete(id).subscribe(data => {
      this.loaddata_page();
    })
  }

  next() {
    console.log(this.page_num)
    if (this.page_num < this.Pagenav.length - 1) {
      this.page_num++;
      this.loaddata();
    }
  }

  before() {
    if (this.page_num - 1 >= 0) {
      this.page_num--;
      this.loaddata();
    }

  }

  search() {
    this.loaddata_page();
  }
}
