import { Component, OnInit } from '@angular/core';

import { crud } from '../crud';
import { ProductService } from '../product.service';

import { ValidationService } from '../validationClass';

@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: any;
  searchBox: string = "";

  // listItems:string[]=[];

  ngOnInit(): void {
    this.productList();
  }

  productList() {
    this.productService.getAllProducts().then((res:any) => {

      this.products = res;
    }).catch((err:any)=>{
      console.log(err.response.data)
    });
  }

  productSearch() {

      let search = this.searchBox;
    this.productService.getAllProducts().then((res:any) => {
      
      let productData = res;

      if (search != null && search != "") {
        let value = productData.filter((obj: any) => obj.name == search)
        this.products = value;
      }
      else {
        this.productList();
      }
    });
}

  // deleting data
  delete(id: string, rev: string) {
    crud.deleteData("giftshop_products", id, rev);
  }


}

