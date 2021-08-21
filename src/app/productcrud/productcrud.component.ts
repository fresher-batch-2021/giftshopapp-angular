import { Component, OnInit } from '@angular/core';

import { crud } from '../crud';
import { products } from '../productService';

@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  constructor() { }
  products: any;
  searchBox: string = "";

  // listItems:string[]=[];

  ngOnInit(): void {
    this.productList();


  }
  productList() {
    products.getAllData().then(res => {

      // console.log(res.data);
      let datas = res.data.rows;
      let productData = datas.map((obj: any) => obj.doc);
      this.products = productData;
    });
  }


  productSearch() {

    let search = this.searchBox;
    products.getAllData().then(res => {
      let datas = res.data.rows;
      let productData = datas.map((obj: any) => obj.doc);

      if (search != null && search != "") {
        let value = productData.filter((ob: any) => ob.name == search)
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

