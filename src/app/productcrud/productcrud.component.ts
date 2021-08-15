import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  constructor() { }

  products:any;
  ngOnInit(): void {
    this.productList();
  }

  
  productList(){

    const url="https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products";

    axios.get(url).then(res =>{
      let data=res.data;
      console.log(data);
       this.products=res.data;
      

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }
  delete(id:number){
    const url="https://product-mock-api.herokuapp.com/giftshopapp/api/v1/products/"+id;
    

    axios.delete(url).then(res =>{
      
      alert("deleted successfully");
      window.location.href='/productcrud';

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }


  

}
