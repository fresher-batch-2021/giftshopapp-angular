import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import axios from 'axios'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;
  

  constructor(private route:Router) {
   }
   goTOAdmin(){
     this.route.navigate(['/dashboard']);
  }
  goToHome(){
    this.route.navigate(['/dashboard']);
  }
  setData(key:string,value:any){
    localStorage.setItem(key,value);
  }
  getData(key:string){
    let x=localStorage.getItem(key);
    return x;
  }
//for navigation
  ngOnInit(): void {
  }
  loginEmail:string="";
  loginPassword:string="";
  
  
  login(){
    
    let email=this.loginEmail;
    let password=this.loginPassword;
   
        
switch(true){
  case (email ==""||email==null||email.trim()==""):{alert("invalid username");break;}
  case (password.trim() == ""):{alert("password is invalid"); break;}

  default :{const loginobj = {
      "email": email,
      "password": password 
     };

      //sending data to server
      const url = "https://product-mock-api.herokuapp.com/giftshopapp/api/v1/auth/login";

      console.log(loginobj);//for our verification

      axios.post(url,loginobj).then(res=>{
          console.log(res);

          
          
            
          
          let data=res.data;
          this.setData("LOGGED_IN_USER",res.data);
          this.setData("IsLoggedIn",JSON.stringify(true));

          alert("login succesful");
        if(data.role=="admin"){
          this.goTOAdmin();
        }
        else{
          this.goToHome();
        }
      }).catch(err=>{
              console.log(err.response.data);
              if (err.response.data.errorMessage){
                  alert(err.response.data.errorMessage);
              }
              else{
              alert("login failed");
              }
      });
  }
}
    // ==========================

  }
}
