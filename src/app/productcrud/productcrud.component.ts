import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  constructor(private productService: ProductService,private restService:RestService) { }

  products: any;
  searchBox: string = "";

  // listItems:string[]=[];

  ngOnInit(): void {
    this.productList();
  }

  productList() {

    this.restService.getAllData('giftshop_products').subscribe((res:any)=>{
      // console.log('yesh',res)
      let data=res.rows.map((obj:any)=>obj.doc)
      
      this.products = data;
      console.table(this.products)
    },(err:any)=>{
        console.log(err);
    });

    
  }

  
  
  productSearch() {

      let search :any= this.searchBox;

      this.restService.getAllData('giftshop_products').subscribe((res:any)=>{
      
        let productData=res.rows.map((obj:any)=>obj.doc)
        console.table(productData)

      if (search != null && search != "") {
        let value = productData.filter((obj: any) => obj.name.toLowerCase()==search.toLowerCase());
        
        this.products = value;
      }
      else {
        this.productList();
      }
    });
}

  // deleting data
  deleteProduct(id: string, rev: string) {
    console.log('id',id,'rev',rev)
    let result=confirm("do you want to delete this product ?");
    if(result){
      const deleteObj={
        database:'giftshop_products',
        id:id,
        rev:rev
      }
this.restService.deleteData(deleteObj).subscribe((res:any)=>{
  this.productList();
})

  }}


}

