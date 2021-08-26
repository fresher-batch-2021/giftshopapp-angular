import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  constructor(private productService: ProductService, private orderService:OrderService) { }

  ngOnInit(): void {

    this.loadProducts();
    

    
  }

  products:any;

  orders:any;

  loadProducts(){
    this.productService.getAllProducts().then((res:any)=>{
      this.products = res;
      this.loadOrders();
    })
  }

  loadOrders(){
    // loading orders to chart
    this.orderService.getAllOrders().then((res:any)=>{
      this.orders = [];
      res.filter((obj:any)=>obj.status=='DELIVERED' || obj.status =='ORDERED').map( (obj:any)=>this.orders.push(...obj.products));
      // console.log("yesh")
      // console.log(JSON.stringify(this.orders))
      // console.table(this.orders);

      for(let product of this.products){
      let quantities =  this.orders.filter( (obj:any)=> obj.productName == product.name).map((obj:any)=>obj.quantity);
      let noOfOrders = _.sum(quantities);

      
      let data = [ product.name, noOfOrders];
      
      this.myData.push(data);
      }
    });
  }
  

  myType:any = 'BarChart';
  PieChart:any='PieChart';
  pointSize:any=30;
myData:any = [];
/*
    ['London', 1],
    ['New York', 15],
    ['Paris', 2],
    ['Berlin', 3],
    ['Kairo', 1]
  ];*/
  options = {'title':'Total products sold',
                       'width':800,
                       'height':500,
                      'is3D':true};

   

  
  
}
