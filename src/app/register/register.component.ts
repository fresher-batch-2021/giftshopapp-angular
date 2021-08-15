import { Component, OnInit } from '@angular/core';
import axios from 'axios'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerName:string="";
  registerEmail:string="";
  registerPassword:string="";
  registerConfirm:string="";
  
  register() {
    // event.preventDefault();
    alert("hello");
    // const name =document.getElementById("#registerName");
    const name=this.registerName;
    // const email = document.getElementById("#registerEmail");
    const email=this.registerEmail;
    // const password = document.getElementById("#registerPassword");
    const password =this.registerPassword;
    // const confirm = document.getElementById("#registerConfirm");
    const confirm=this.registerConfirm;
    //if name is valid or not
    if (this.registerName.trim() == ""||this.registerName==null) {
        alert("name can't be empty");
    }
    if (this.registerPassword.length < 8) {
        alert("password is less than 8 charectors");
    }
    else if (password != confirm) {
            alert("password doesnot match");
        }  
        else {
             // backend
             let registerObj = {
                "name": name,
                "email": email,
                "password": password,
                "role": "USER"
            };

        console.log(registerObj); //for printing in console 

      const url = "https://product-mock-api.herokuapp.com/giftshopapp/api/v1/auth/register";//registration url
      axios.post(url, registerObj).then(res => {

                console.log(res);//printing in console // for user purpose
                alert("Registration is succesful");
                window.location.href = "login.html";
            }).catch(err => {
                console.error(err);
                alert("Unable to register");
            });

        }
    }
    
}
