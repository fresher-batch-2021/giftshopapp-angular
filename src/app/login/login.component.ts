import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios'
import { crud } from '../crud';
import { ValidationService } from '../validationClass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: any;


  constructor(private route: Router,private validator:ValidationService) {
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  getData(key: string) {
    let x = localStorage.getItem(key);
    return x;
  }
  //for navigation
  ngOnInit(): void {
  }
  loginEmail: string = "";
  loginPassword: string = "";


  login() {

    let email = this.loginEmail;
    let password = this.loginPassword;


    try{
      this.validator.isValidEmail(email,"email can't be empty")
    
      this.validator.isValidPassword(password,"password can't be empty")

      
      const loginobj = {
        "email": email,
        "password": password
      };

      //sending data to server
      crud.Login(loginobj).then(res => {

        let data = res.data.docs[0];
        this.setData("IsLoggedIn", JSON.stringify(true));
        this.setData("LOGGED_IN_USER",JSON.stringify(data))
        this.setData("userData",JSON.stringify(data))
        this.setData("role",data.role)
        

        if (data.role == "ADMIN") {
          alert("welcome admin");
          this.route.navigate(['/dashboard']);
        }
        else if (data.role == "USER") {
          alert("users cant login on admin portal")
          // alert("hello")
          // this.route.navigateByUrl('https://giftshop-yeswanth.netlify.app/');
          // document.location.href="https://giftshop-yeswanth.netlify.app/index.html"
        }
        else {
        
          alert("invalid credentials")
        }
      }).catch(err => {
        console.log(err.response.data);
        if (err.response.data.errorMessage) {
          alert(err.response.data.errorMessage);
        }
        else {
          alert("login failed");
        }
      });
    }

    catch(err){
      console.log(err.message)
      alert(err.message)
      alert("unable to login")
    }
    }}

