import { Component, OnInit } from '@angular/core';

import { crud } from '../crud';

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

let data=crud.getData("giftshop_products");
  data.then((res:any)=>{
  alert("data got sucessfully");
  let data =res.data.rows;
  let values=data.map((obj:any)=>obj.doc);
  this.products=values;
  console.log(values); 
  
  }).catch((err:any)=>{
  alert("eror in getting data");
    });
 
  }

// deleting data
  delete(id:string,rev:string){
    // file is crud.ts in app
    crud.deleteData("giftshop_products",id,rev,'/productcrud');
  }

}
