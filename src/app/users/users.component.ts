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
  this.restService.getAllDataByType('user').subscribe((res:any)=>{
    
    let data=res.docs;
    console.log(data)
    // this.users=data.map((obj:any)=>obj.doc).filter((obj:any)=>obj.role=="USER");
    this.users=data.filter((obj:any)=>obj.role=="USER")
  },(err:any)=>{

    console.log("Error"+err.data);
  });
  }

  userSearch() {

    
    let search = this.searchBox;

    this.restService.getAllDataByType('user').subscribe((res:any)=>{
      // let datas = res.data.rows;
      let datas=res.docs;
      console.log(datas)
    let userData = datas.filter((obj:any)=>obj.role=="USER");
    

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
      // ===
    });

}

  
  delete(id:string,rev:string){
    
  // deleting users using api
  let result=confirm("do you want remove the user ?")
  if(result){
    alert(rev)
    let deleteObj={
      database:'giftshop',
      id:id,
      rev:rev
    }
    // this.restService.deleteData(deleteObj);
    this.restService.deleteData(deleteObj).subscribe(res=>{
     this.UserList();
    },(err:any)=>{
      console.log(err)
    })
  }}

  userStatusToggle(id:string){
    let result = confirm("do you want to change status");
    if(result){
      this.restService.getDataById('giftshop',id).subscribe((res:any)=>{

        let dbObj=res;
        dbObj.userStatus=false;
        let changedObj={
          database:'giftshop',
          id:dbObj._id,
          rev:dbObj._rev,
          changedValue:dbObj
        }
        this.restService.updateData(changedObj).subscribe(res=>{
          this.toastr.success("status updated");
          
        this.UserList()
        });
        
      });
      // let changedObj={
      //   database:'giftshop',
      //   id:id,
      //   rev:rev,

      }
      // this.restService.updateData()
    }

  }

