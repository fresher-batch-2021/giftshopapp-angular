 import { Component, OnInit } from '@angular/core';

import { crud } from '../crud';
import { product_report } from '../productReportService';
import { ValidationService } from '../validationClass';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(private validator:ValidationService) { }
productName:string="";
productPrice:number=0;
productImage:any;
productQuantity:number=0;
productDescription:string="";
file:any;

 crud=new crud();

  ngOnInit(): void {
  }
  // used to upload a file
  onFileUpload(event:any){
    this.productImage = event.target.files[0].name;
  
    }
 
    addProduct(){
      let name=this.productName;
      let price=this.productPrice;
      let img=this.productImage;
      let qty=this.productQuantity;
      let description=this.productDescription;
      try{
        this.validator.isValidString(name,"name can't be empty")
        this.validator.isValidString(description,"description can't be empty")
  
        let productObj={
          name:name,
          price:price,
          imageUrl:img,
          quantity:qty,
          description:description
        };
        product_report.addNewData(name );
       crud.addData(productObj,"giftshop_products");//adding data
       
      }
      catch(err){
        console.log(err.message)
        alert(err.message)
        alert("unable to add products")
      }
    
    }
}
