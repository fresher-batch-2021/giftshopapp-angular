
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private restService:RestService) { }
orders:any;
searchBox:any
  ngOnInit(): void {
    this.orderList();
  }

    
orderList(){
  let data=this.restService.getAllData("giftshop_orders");
  data.subscribe((res:any)=>{
    let orderData =res.rows;
    let values=orderData.map((obj:any)=>obj.doc);
    this.orders=values;
    console.log(values); 
    },(err:any)=>{
      alert("eror in getting data");
    });
   
    }

 
  
update(id:string){

  let productDatas=this.restService.getDataById('giftshop_orders',id)


productDatas.subscribe((res:any)=>{
  let productObj =res;
  console.log(productObj);
  productObj.status='DELIVERED';

  // now update to api
  
  const changedObj={
    database:"giftshop_orders",
    id:id,
    rev:productObj._rev,
    changedValue:productObj
  };
  this.restService.updateData(changedObj).subscribe((response:any)=>{
    alert("status updated by http")
    window.location.reload();
  },err=>{
    console.log(err)
  });
});

}

/**
 * delete function
 * @param id id of element
 * @param rev rev id of element
 */

delete(id:string,rev:string){
  // file is crud.ts in app
  const deleteObj={
    database:'giftshop_products',
    id:id,
    rev:rev
  };

  this.restService.deleteData(deleteObj).subscribe((res:any)=>{

  },err=>{
    console.log(err);
  });
}

orderSearch(){
  
  let search = this.searchBox;

  this.restService.getAllData('giftshop_orders').subscribe((res:any)=>{
    let datas = res.rows;
    console.log(datas)
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
