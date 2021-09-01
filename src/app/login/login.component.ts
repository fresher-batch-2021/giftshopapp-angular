
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { crud } from '../crud';
import { ValidationService } from '../validationClass';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: any;
  myLoginForm!: FormGroup;


  constructor(private fb:FormBuilder, private route: Router,private validator:ValidationService) {
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
          // this.route.navigateByUrl('https://giftshop-yeswanth.netlify.app/');
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

