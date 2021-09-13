import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ValidationService } from '../validationClass';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.less']
})

export class AddProductModalComponent implements OnInit {
  ngOnInit(): void {
    this.addProductsForm=this.fb.group({
      name : new FormControl('',Validators.required),
      price : new FormControl('',Validators.required),
      imageUrl : new FormControl('',Validators.required),
      quantity : new FormControl('',Validators.required),
      description : new FormControl('',Validators.required)
    })
  }
  constructor(private  dialogRef:  MatDialogRef<AddProductModalComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any,private toastr:ToastrService, private fb:FormBuilder, private validator:ValidationService, private productService:ProductService) {}
  
  addProductsForm!:FormGroup;
  imagePath:string='';
  ProductTypeObj!:Product;

  public  closeMe() {
      this.dialogRef.close();
  }
   // used to upload a file
   onFileUpload(event:any){
    this.imagePath=event.target.files[0].name;
    }
 
    addProduct(){

      
      this.addProductsForm.value.imageUrl=this.imagePath;

      let formObj:Product =this.addProductsForm.value;

      console.table(formObj)
      let name =formObj.name;
      let price = formObj.price;
      let image = formObj.imageUrl;
      let quantity = formObj.quantity;
      let description = formObj.description;

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
          // type:"products"
        };
        
        const product = new Product();
        product.setData(productObj);

        this.productService.addData(product).subscribe( (res:any)=>{
         this.toastr.success("Successfully added");
       });

       
      }
      catch(err){
        this.toastr.error("Unable to add products")
      }
    
    }
}
