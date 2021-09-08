
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

import { LoginService } from '../login.service';
import { ValidationService } from '../validationClass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: any;
  myLoginForm!: FormGroup;


  constructor(private fb:FormBuilder,private toastr:ToastrService, private route: Router,private validator:ValidationService,private loginService:LoginService) {
  }

  setData(key: string, value: any) {
    localStorage.setItem(key, value);
  }
  getData(key: string) {
    let value = localStorage.getItem(key);
    value=value!=null?JSON.parse(value):console.log(key,'localstorage is empty');
    return value;
  }
  //for navigation
  ngOnInit(): void {
    
    this.myLoginForm=this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('')
    })

  }
  login() {

    let email = this.myLoginForm.value.email;
    let password = this.myLoginForm.value.password;


    try{
      this.validator.isValidEmail(email,"email can't be empty")
    
      this.validator.isValidPassword(password,"password can't be empty")

      
      const loginobj = {
        "email": email,
        "password": password
      };

      //sending data to server

      this.loginService.login(email,password).subscribe((res:any)=>{
        console.log("kskdksmdks",res.docs[0])


        let data = res.docs[0];
        this.setData("IsLoggedIn", JSON.stringify(true));
        this.setData("LOGGED_IN_USER",JSON.stringify(data))
        this.setData("userData",JSON.stringify(data))
        this.setData("role",data.role)
        

        if (data.role == "ADMIN") {
          this.toastr.success("welcome admin");
          setTimeout(() => {
          this.route.navigate(['/dashboard']);
          }, 1000);
        }
        else if (data.role == "USER") {
          this.toastr.error("users can't login on admin portal");
          // this.route.navigateByUrl('https://giftshop-yeswanth.netlify.app/');
         }
        else {
          this.toastr.error("Invalid Credentials")
        }
      },err=>{
          
        this.toastr.error("Login Failed")
      });
    }

    catch(err){
      
      this.toastr.error("unable to login please try again later")
    }
    }}

