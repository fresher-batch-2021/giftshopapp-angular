import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  
  public  email:  string  =  "";
  public  password:  string  =  "";
  constructor(private  dialog:  MatDialog, private  router:  Router) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
    {
        this.router.navigate(['success']);
    }
    else
    {
        this.dialog.open(AddProductModalComponent,{
          panelClass:'modalClass',
          
          data: {
        message:  "Error!!!"
        }});
    }
}

}
