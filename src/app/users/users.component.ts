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

    const url="https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_user/_all_docs?include_docs=true";
    const userName="apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn";
    const password="3bc2893c0a2a1ec42d9b17840b18447b";
    const basicAuth='Basic '+btoa(userName+':'+password);

    axios.get(url,{headers:{Authorization:basicAuth}}).then(res =>{
      let data=res.data.rows;
      this.users=data.map((obj:any)=>obj.doc);
    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }

  
  delete(id:string,rev:string){
    const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
    const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
    const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);// one space after Basic
    const url="https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_user/"+id +"?rev="+ rev;
    

    axios.delete(url,{headers:{Authorization:basicAuth}}).then(res =>{
      
      alert("deleted successfully");
      window.location.href='/users';

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }


}
