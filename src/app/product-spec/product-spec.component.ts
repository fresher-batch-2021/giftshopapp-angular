import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { ProductComponent } from '../product/product.component';
@Component({
  selector: 'app-product-spec',
  templateUrl: './product-spec.component.html',
  styleUrls: ['./product-spec.component.css']
})
export class ProductSpecComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    this.productSpec();
  }

// ===============================

productSpec(){
    // alert("hello");
  // getting datas from url of the page
  
  const param = new URLSearchParams(window.location.search);
  var Id =param.get("id");
  alert(Id);
  

  //getting a specific data set
  var url =`https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products/${Id}`;
  axios.get(url).then(res =>{
           
      let productObj =res.data;
      
      const id=productObj.id;
      const name=productObj.name;
      const img_url=productObj.image_url;
      const price=productObj.price;
      const description=productObj.description;

      let content =
      `<img src="assets/Images/${img_url}" alt="">
      <p>${name}</p>
      <br>
      <p>${price}</p>
      <br>
      <p>${description}</p>
      <button (ngSubmit)="toCart(${id},'${name}','${img_url}',${price},'${description}')">add to cart</button>
      `;
      
      (document.querySelector("#productSpec")as HTMLElement).innerHTML=content;   
      
  }).catch(err =>{
      console.log(err.resposnse.data);
      if(err.resposnse.data){
          alert(err.resposnse.data);
      }
      else{
          alert("error in getting product");
      }
  });

  
  
}


// adding product to cart
toCart(id:number,name:string,img_url:string,price:number,description:string){
 
  let cartItemsStr=localStorage.getItem("cartElements");
  let cartItems:any = cartItemsStr != null ? JSON.parse(cartItemsStr):[];
  var qty=1;
  

  // If item already exist, update the quantity
  let index = cartItems.findIndex((obj:any)=>obj.Id == id);
  
  alert(index);
  console.log(index);
  if (index != -1){
      let cartObj = cartItems[index];
      console.log(cartObj);
      cartObj.Qty++;
      cartItems[index] = cartObj;

  }
  else{
      // if item not exist, add new item to cart
  let cartObj = {Id:id,Name:name,Price:price,Image_url:img_url,Description:description,Qty:qty};
  console.log(cartObj);
  cartItems.push(cartObj);
  }
  
  localStorage.setItem("cartElements",JSON.stringify(cartItems));
  window.location.href="cart.html";
}

// ===============================


}
