import { Component, OnInit } from '@angular/core';
import axios from 'axios';



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

    const url="http://product-mock-api.herokuapp.com/giftshopapp/api/v1/users";

    axios.get(url).then(res =>{
      let data=res.data;
      console.log(data);
       this.users=res.data;
      

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }

  delete(id:number){
    alert(id);
   
  }

}
