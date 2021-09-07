import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { OrderService } from '../order.service';
import { Orders } from '../orders';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  
  constructor(private productService:ProductService,private orderService:OrderService) { }

  ngOnInit(): void {

    this.loadProducts();
    

    
  }

  products:any;

  orders:any;

  loadProducts(){

    this.productService.getAllData().subscribe((res:any)=>{
      console.log(res.docs)
      // let data=res.rows.map((obj:any)=>obj.doc)
      let data:Product[] =res.docs;
      console.table(data)
      this.products=data;
      this.loadOrders();
    });

  }

  loadOrders(){
    // loading orders to chart

    this.orderService.getAllOrders().subscribe((res:any)=>{
    
      let data:Orders[] = res.docs;
      // console.table(data)

      // console.table(data.flatMap((obj:Orders)=>obj.products))
      this.orders = [];
      data.filter((obj:Orders)=>obj.status=='DELIVERED' || obj.status =='ORDERED').map( (obj:Orders)=>this.orders.push(...obj.products));
    
      console.table(this.orders)
      for(let product of this.products){
        
      let quantities =  this.orders.filter( (obj:any)=> obj.productName == product.name).map((obj:any)=>obj.quantity);
      let noOfOrders = _.sum(quantities);

      
      let chartData = [ product.name, noOfOrders];
      
      this.barData.push(chartData);
      this.myDatas.push(chartData)
      }
  
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
barData:any = [];
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
