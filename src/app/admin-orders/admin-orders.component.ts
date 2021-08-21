import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { crud } from '../crud';
import { orders } from '../orderService';


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

  
  /**
   *
   */
  
update(id:string){
alert(id);
let productDatas=orders.getOrder(id);


productDatas.then(res=>{
  let productObj =res.data;
  console.log(productObj);
  alert(productObj.status);
  productObj.status='DELIVERED';
  // now update to api
  const endUrl=id+"/?rev="+productObj._rev;
  alert(productObj.status);

  orders.updateOrder(endUrl,productObj).then(res=>{
    window.location.reload();
    alert("status updated");
  }).catch(err=>{
    console.log(err.response.data);
  });
})

}
/**
 * delete function
 * @param id id of element
 * @param rev rev id of element
 */
delete(id:string,rev:string){
  // file is crud.ts in app
  crud.deleteData("giftshop_products",id,rev);
}


}
