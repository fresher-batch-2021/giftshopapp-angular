import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { crud } from '../crud';
import { RestService } from '../rest.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private toastr:ToastrService,private restService:RestService){}
  users:any
  searchBox:any

  ngOnInit(): void {
    this.UserList();
  }

  UserList(){
  // listing users
    crud.getData("giftshop_user").then((res:any) =>{
      let data=res.data.rows;
      this.users=data.map((obj:any)=>obj.doc).filter((obj:any)=>obj.role=="USER");
    }).catch((err:any)=>{
      console.log("Error"+err.data);
    });
  }

  userSearch() {

    
    let search = this.searchBox;
  crud.getData("giftshop_user").then((res:any) => {
    let datas = res.data.rows;
    let userData = datas.map((obj: any) => obj.doc).filter((obj:any)=>obj.role=="USER");
    

    if (search != null && search != "") {
      let value = userData.filter((ob: any) => ob.name == search||ob.email==search)
      if(value==""){

        this.toastr.warning("No such data exists")
        this.UserList();
      }
      else{
      this.users = value;
    }}
    else {
      this.UserList();
    }
  });
}

  
  delete(id:string,rev:string){
    
  // deleting users using api
  let result=confirm("do you want remove the user ?")
  if(result){
    // this.restService.deleteData(deleteObj);
    crud.deleteData("giftshop_user",id,rev);
  }}
}
