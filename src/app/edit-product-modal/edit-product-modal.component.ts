import { Component, Inject, OnInit, Optional } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RestService } from '../rest.service';

import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.less']
})
export class EditProductModalComponent implements OnInit {

  
  constructor( private  dialogRef:  MatDialogRef<EditProductModalComponent>, @Inject(MAT_DIALOG_DATA) public  data:  any,private route: ActivatedRoute,private router:Router,private restService:RestService,private productService:ProductService) { 
    console.log(data)
    
    
  }

  ngOnInit(): void {
    
    this.getDetails()
  }

  public id: string = "";
  productName: string = "";
  productPrice: number = 0;
  productImage: any;
  productQuantity: number = 0;
  productDescription: string = "";
  file: any;

  onFileUpload(event: any) {
    this.productImage = event.target.files[0].name;
  }

  //  ===========
  getDetails() {
    // let id = JSON.stringify(this.route.snapshot.paramMap.get('id'));
    let id =JSON.stringify(this.data.id);
    
 
    this.productService.getDataById(id).subscribe((res:any)=>{
      
      console.table("productDetails",res);
      
      let data:Product=res;
      console.log(data)
      this.productName = data.name;
      this.productPrice = data.price;
      this.productImage = data.imageUrl;
      this.productQuantity = data.quantity;
      this.productDescription = data.description;
    });

  }

  editProduct() {
    // let id = this.route.snapshot.paramMap.get('id');
    // let rev =this.route.snapshot.paramMap.get('rev')
    let id =(this.data.id);
    let rev = (this.data.rev);
   
    
    
    let changeObj = {
      _id:id,
      _rev:rev,
      name:this.productName,
      price: this.productPrice,
      imageUrl:this.productImage,
      quantity: this.productQuantity,
      description: this.productDescription,
      
    };
    let editedProduct:Product=new Product();
    editedProduct.setData(changeObj)
    
    

    
    this.productService.updateData(editedProduct).subscribe((res:any)=>{
      this.dialogRef.close()
      // this.router.navigate(['products']);
    })

    
  }



}
