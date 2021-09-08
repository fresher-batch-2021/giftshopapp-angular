import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

import { RestService } from '../rest.service';
import { NgxSpinnerService } from "ngx-spinner";//spinner


@Component({
  selector: 'app-productList',
  templateUrl: './productList.component.html',
  styleUrls: ['./productList.component.css']
})
export class productListComponent implements OnInit {

  // title = 'datatable';
  dtOptions: DataTables.Settings = {};//dataTable
  dtTrigger: Subject<any> = new Subject();//dataTable


  products: any;
  searchBox: string = "";

  constructor(private productService: ProductService, private restService: RestService,private spinner: NgxSpinnerService) { }



  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 1000);
    
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
      
      let data :Product[]= res.docs;
      
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

