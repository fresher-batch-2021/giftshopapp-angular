import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private userService: UserService,
    private toastr: ToastrService,
  ) {}
  users: any;
  searchBox: string = '';

  ngOnInit(): void {
    this.UserList();
  }

  UserList() {
    // listing users
    this.userService.getAllData().subscribe(
      (res: any) => {
        let data = res.docs;
        console.log(data);
        this.users = data.filter((obj: any) => obj.role == 'USER');
      },
      (err: any) => {
        console.log('Error' + err.data);
      }
    );
  }

  userSearch() {
    let search = this.searchBox;

    this.userService.getAllData().subscribe((res: any) => {
      let datas = res.docs;
      console.log(datas);
      let userData = datas.filter((obj: any) => obj.role == 'USER');

      if (search != null && search != '') {
        let value = userData.filter(
          (ob: any) => ob.name == search || ob.email == search
        );
        if (value == '') {
          this.toastr.warning('No such data exists');
          this.UserList();
        } else {
          this.users = value;
        }
      } else {
        this.UserList();
      }
    });
  }

  userStatusToggle(id: string) {
    let result = confirm('do you want to change status');
    if (result) {

      this.userService.getDataById(id).subscribe((res: any) => {
        let dbObj = res;
        dbObj.userStatus = false;

        this.userService.updateData(dbObj).subscribe((res) => {
          this.toastr.success('status updated');

          this.UserList();
        });
      });
    }
  }
}
