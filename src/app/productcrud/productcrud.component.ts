import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from '../product.service';

import { RestService } from '../rest.service';


@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  // title = 'datatable';
  dtOptions: DataTables.Settings = {};//dataTable
  dtTrigger: Subject<any> = new Subject();//dataTable


  products: any;
  searchBox: string = "";

  constructor(private productService: ProductService, private restService: RestService) { }



  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };//for dataTable

    this.productList();
  }

  productList() {

    this.productService.getAllData().subscribe((res: any) => {
      console.log('yesh', res)
      let data = res.docs;
      this.products = data;


      this.dtTrigger.next();//for dataTable

      // console.table(this.products)
    }, (err: any) => {
      console.log(err);
    });


  }




  // deleting data
  deleteProduct(id: string, rev: string) {

    let result = confirm("Do you want to delete this product ?");
    if (result) {

      this.productService.deleteData(id, rev).subscribe((res: any) => {
        this.productList();
      })

    }
  }


}

