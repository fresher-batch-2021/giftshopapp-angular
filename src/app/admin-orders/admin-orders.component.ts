import { Component, OnInit } from '@angular/core';
import { crud } from '../crud';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor() { }
orders:any;
  ngOnInit(): void {
    this.orderList();
  }

    
orderList(){

  let data=crud.getData("giftshop_orders");
    data.then((res:any)=>{
    alert("data got sucessfully");
    let data =res.data.rows;
    let values=data.map((obj:any)=>obj.doc);
    this.orders=values;
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

// status update
delivered(){

}
}
