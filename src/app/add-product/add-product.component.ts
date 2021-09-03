 import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { crud } from '../crud';

import { RestService } from '../rest.service';
import { ValidationService } from '../validationClass';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor(private toastr:ToastrService, private fb:FormBuilder, private validator:ValidationService, private restService: RestService) { }


 crud=new crud();
  addProductsForm!:FormGroup
  imagePath:string='';

  ngOnInit(): void {
    this.addProductsForm=this.fb.group({
      productName : new FormControl('',Validators.required),
      productPrice : new FormControl('',Validators.required),
      productImage : new FormControl('',Validators.required),
      productQuantity : new FormControl('',Validators.required),
      productDescription : new FormControl('',Validators.required)
    })
  }
  // used to upload a file
  onFileUpload(event:any){
    this.imagePath=event.target.files[0].name;
    }
 
    addProduct(){

      
      this.addProductsForm.value.productImage=this.imagePath;

      let formObj=this.addProductsForm.value;
      console.table(formObj)
      let name =formObj.productName;
      let price = formObj.productPrice;
      let image = formObj.productImage;
      let quantity = formObj.productQuantity;
      let description = formObj.productDescription;

     if(name==''){
       this.toastr.warning('name cannot be empty')
       return;
     }
     
     else if(image==undefined){
       this.toastr.warning('image cant be empty')
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
          description:description,
          type:"products"
        };
        
       this.restService.addData(productObj,"giftshop").subscribe( (res:any)=>{
         this.toastr.success("Successfully added");
       },err=>{
        console.log("Error");
        this.toastr.success("Failed to add");
       });

       
      }
      catch(err){
        console.log(err.message)
        this.toastr.error("unable to add products")
      }
    
    }
}
