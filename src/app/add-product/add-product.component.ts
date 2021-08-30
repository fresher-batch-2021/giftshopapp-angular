 import { Component, OnInit } from '@angular/core';

import { crud } from '../crud';
import { product_report } from '../productReportService';
import { RestService } from '../rest.service';
import { ValidationService } from '../validationClass';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(private validator:ValidationService, private restService: RestService) { }
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
      let price=this.productPrice!=null?this.productPrice:0;
      let image=this.productImage;
      let quantity=this.productQuantity!=null?this.productQuantity:0;
      let description=this.productDescription!=null?this.productDescription:'no description given';
     if(name==''){
       alert('name cannot be empty')
       return;
     }
     
     else if(image==undefined){
       alert('image cant be empty')
       return;
     }

      try{
        this.validator.isValidString(name,"name can't be empty")
        this.validator.isValidString(description,"description can't be empty")
  
        let productObj={
          name:name,
          price:price,
          imageUrl:image,
          quantity:quantity,
          description:description
        };
        
       this.restService.addData(productObj,"giftshop_products").subscribe( (res:any)=>{
         alert("Successfully added");
       },err=>{
        console.log("Error");
        alert("Failed to add");
       });

       
      }
      catch(err){
        console.log(err.message)
        alert(err.message)
        alert("unable to add products")
      }
    
    }
}
