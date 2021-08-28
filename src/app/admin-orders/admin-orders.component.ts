import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { XLSX$Consts } from 'xlsx/types';
import { crud } from '../crud';
import { orders } from '../orderService';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor() { }
orders:any;
searchBox:any
  ngOnInit(): void {
    this.orderList();
  }

    
orderList(){

  let data=crud.getData("giftshop_orders");
    data.then((res:any)=>{
    // alert("data got sucessfully");
    let data =res.data.rows;
    let values=data.map((obj:any)=>obj.doc);
   
    this.orders=values;
    console.log(values); 
    
    }).catch((err:any)=>{
    alert("eror in getting data");
      });
   
    }

 
  
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

orderSearch(){
  
  let search = this.searchBox;
  crud.getData("giftshop_orders").then((res:any) => {
    let datas = res.data.rows;
    let productData = datas.map((obj: any) => obj.doc);

    if (search != null && search != "") {
      let value = productData.filter((ob: any) => ob.name == search||ob.phonenumber==search||ob.status.toLowerCase()==search.toLowerCase())
      if(value==""){
        alert("no such data exist")
        this.orderList();
      }
      else{
      this.orders = value;
    }}
    else {
      this.orderList();
    }
  });
}

// download excel file
exportexcel(){
  
let fileName='orderDetails.xlsx';//name of which file is downloaded
let element=document.getElementById('ordersTable')//to get the table
const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);//convert table data into sheet

const wb:XLSX.WorkBook=XLSX.utils.book_new();//creating a new workbook obj
XLSX.utils.book_append_sheet(wb,ws,'Sheet1');//adding the sheet data into workbook
XLSX.writeFile(wb,fileName);//downloading the file
}

}
