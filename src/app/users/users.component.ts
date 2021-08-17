import { Component, OnInit } from '@angular/core';
import { crud } from '../crud';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any
  
  constructor() { }

  ngOnInit(): void {
    this.UserList();
  }

  UserList(){
  // listing users
    crud.getData("giftshop_user").then((res:any) =>{
      let data=res.data.rows;
      this.users=data.map((obj:any)=>obj.doc);
    }).catch((err:any)=>{
      console.log("Error"+err.data);
    });
  }

  
  delete(id:string,rev:string){
  // deleting users using api
    crud.deleteData("giftshop_user",id,rev,'/users');
  }
}
