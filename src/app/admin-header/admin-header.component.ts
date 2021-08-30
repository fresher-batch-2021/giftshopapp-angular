import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  isVisible:boolean=false;

  logout(){
    alert("logging out")
    localStorage.clear()
    this.route.navigate(['/login']);
  }

}
