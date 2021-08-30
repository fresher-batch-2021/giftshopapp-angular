import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
import * as _ from 'lodash';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  constructor(private productService: ProductService, private orderService:OrderService,private restService:RestService) { }

  ngOnInit(): void {

    this.loadProducts();
    

    
  }

  products:any;

  orders:any;

  loadProducts(){

    this.restService.getAllData('giftshop_products').subscribe((res:any)=>{

      let data=res.rows.map((obj:any)=>obj.doc)
      console.table(data)
      this.products=data;
      this.loadOrders();
    });

  }

  loadOrders(){
    // loading orders to chart
    this.restService.getAllData('giftshop_orders').subscribe((res:any)=>{
     console.log('yesh')
      // console.table(res.rows)
      let data=res.rows.map((obj:any)=>obj.doc);
      console.table(data)
      console.table(data.products)
      this.orders = [];
      data.filter((obj:any)=>obj.status=='DELIVERED' || obj.status =='ORDERED').map( (obj:any)=>this.orders.push(...obj.products));
    

      for(let product of this.products){
      let quantities =  this.orders.filter( (obj:any)=> obj.productName == product.name).map((obj:any)=>obj.quantity);
      let noOfOrders = _.sum(quantities);

      
      let data = [ product.name, noOfOrders];
      
      this.myData.push(data);
      this.myDatas.push(data)
      }
      // console.table(this.myDatas)
    });
  }
  

  myType:any = 'BarChart';
  PieChart:any='PieChart';
  pointSize:any=30;
  myDatas:any=[
    // ['London', 1],
    // ['New York', 15],
    // ['Paris', 2],
    // ['Berlin', 3],
    // ['Kairo', 1]
  ];
myData:any = [];
/*
    ['London', 1],
    ['New York', 15],
    ['Paris', 2],
    ['Berlin', 3],
    ['Kairo', 1]
  ];*/
  options = {'title':'Total products sold',
                       'width':500,
                       'height':250,
                      'is3D':true};

   
  rowChartOptions = {'title':'No of products',
  'width':500,
  'height':250,
};

  
  
}
