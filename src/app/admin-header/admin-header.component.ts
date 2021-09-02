import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor(private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  isVisible:boolean=false;

  logout(){
    this.toastr.warning("Logging out");
    setTimeout(() => {
      
    localStorage.clear()
    this.route.navigate(['/login']);
    }, 1000);
  }

}
