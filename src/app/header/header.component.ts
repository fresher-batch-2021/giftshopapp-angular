import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor() { }
  // getting data from local storage
  getData(data:any){
    return  localStorage.getItem(data);
  }
  // setting data from local storage
  setData(key:string,value:any){
    localStorage.setItem(key,JSON.stringify(value));
  }
 
  content:string="";

  ngOnInit(): void {
    this.IsLoggedIn();
    // this.logout();
  }
 IsLoggedIn(){
  let login:any=this.getData('IsLoggedIn');
  let content="";
    
    if(login==null||login==undefined){login==false;}
    
    if(!login){
        content=`
        <a class="navlink" (click)=logout()>logout</a>
        `;
    }
    else{
        content=`
        <a class="navlink" routerLink='/login'>login</a>
        <a class="navlink" routerLink='./register'>Register</a>
        `;
        this.setData("IsLoggedIn",false);
    }
    (document.querySelector("#navlinks")as HTMLElement).innerHTML=content;
 }
// logout
 logout(){
    
  this.setData("IsLoggedIn",false);
  
  localStorage.removeItem("cartElements");
  localStorage.removeItem("totalAmount");
  window.location.href="index.html";
}
// loginCheck
//  loginCheck(){
//   let check:any=this.getData("IsLoggedIn")
// if(JSON.parse(check)==false){
// alert("can't do that need to login first");
// window.location.href="login.html";
// return false;
// }



}
