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


  ngOnInit(): void {
    this.productList();
  }

  productList() {

    this.restService.getAllDataByType('products').subscribe((res:any)=>{
      console.log('yesh',res)
      let data=res.docs;
      this.products = data;
      // console.table(this.products)
    },(err:any)=>{
        console.log(err);
    });

    
  }

  
  
  productSearch() {

      let search :any= this.searchBox;

      this.restService.getAllDataByType('products').subscribe((res:any)=>{
      
        let productData=res.docs;
        console.table("yesh",productData)

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
    let result=confirm("Do you want to delete this product ?");
    if(result){
      const deleteObj={
        database:'giftshop',
        id:id,
        rev:rev
      }
this.restService.deleteData(deleteObj).subscribe((res:any)=>{
  this.productList();
})

  }}


}

