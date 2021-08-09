import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }
  loginEmail:string="";
  loginPassword:string="";
  
  login(){
    let email=this.loginEmail;
    let password=this.loginPassword;
    // alert(this.loginEmails);
    // alert(this.loginPassword);
    // ==========================
        
switch(true){
  case (email ==""||email==null||email.trim()==""):{alert("invalid username"); break;}
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

          //to stay loged in
          // let user = res.data;
          // localStorage.setItem("LOGGED_IN_USER", JSON.stringify(user));

          alert("login succesful");
          window.location.href="index.html";
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
