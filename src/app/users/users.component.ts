import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Users } from '../users';

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
        let data:Users[] = res.docs;
        console.log(data);
        this.users = data.filter((obj: Users) => obj.role == 'USER');
      }
    );
  }

  userSearch() {
    let search = this.searchBox;

    this.userService.getAllData().subscribe((res: any) => {
      let datas:Users[] = res.docs;
      console.log(datas);
      let userData = datas.filter((obj: any) => obj.role == 'USER');

      if (search != null && search != '') {
        let value = userData.filter(
          (ob: Users) => ob.name == search || ob.email == search
        );
        if (value[0] ==null) {
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
        let userObj :Users= res;
        if(userObj.userStatus==false){
          userObj.userStatus = true;
        }
        else{
          userObj.userStatus = false;
        }
        

        this.userService.updateData(userObj).subscribe((res) => {
          this.toastr.success('status updated');

          this.UserList();
        });
      });
    }
  }
}
