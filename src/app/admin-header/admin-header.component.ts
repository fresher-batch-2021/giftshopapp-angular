import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { Users } from '../users';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})

export class AdminHeaderComponent implements OnInit {
 
  user!:Observable<Users>;

  constructor(private route:Router,private toastr:ToastrService,private userService:UserService) {
   
    this.user = userService.loginSubject;
    alert(this.user)
   }

  ngOnInit(): void {



  }

  
  logout(){
    this.userService.loginSubject.next(null);

    this.toastr.warning("Logging out");
    setTimeout(() => {
      
    localStorage.clear()
    this.route.navigate(['/login']);
    }, 1000);
    
  }

}
