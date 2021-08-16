 import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {

  constructor() { }
productName:string="";
productPrice:number=0;
productImage:any;
productQuantity:number=0;
productDescription:string="";
file:any;
  ngOnInit(): void {
  }
  // used to upload a file
  onFileUpload(event:any){
    this.productImage = event.target.files[0].name;
    // console.log(file.name);
    }

    addProduct(){
      let name=this.productName;
      let price=this.productPrice;
      let img=this.productImage;
      let qty=this.productQuantity;
      let description=this.productDescription;

      


      let productObj={
        name:name,
        price:price,
        imageUrl:img,
        quantity:qty,
        description:description
      };

      const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
      const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
      const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);// one space after Basic
      const url = "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_products";//registration url
      // console.log(productObj);
     
      axios.post(url,productObj,{headers:{Authorization:basicAuth}}).then(res=>{


        alert("product added succesfully");

      }).catch(err=>{
        alert("error");
      });

    }
}
