
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private restService:RestService,private toastr:ToastrService,private route :Router) { }
orders:any;
searchBox:any
  ngOnInit(): void {
    this.orderList();
  }

    
orderList(){
  let data=this.restService.getAllDataByType('orders');
  data.subscribe((res:any)=>{
    let values =res.docs;
    this.orders=values;
    },(err:any)=>{
      this.toastr.error("Error in getting data")
    });
   
    }

 
  
update(id:string){

  let productDatas=this.restService.getDataById('giftshop',id)


productDatas.subscribe((res:any)=>{
  let productObj =res;
  console.log(productObj);
  productObj.status='DELIVERED';

  // now update to api
  
  const changedObj={
    database:"giftshop",
    id:id,
    rev:productObj._rev,
    changedValue:productObj
  };
  this.restService.updateData(changedObj).subscribe((response:any)=>{

    this.toastr.success("status has been updated")
   
    this.orderList();
    
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
    database:'giftshop',
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

  this.restService.getAllDataByType('orders').subscribe((res:any)=>{
    console.log(res)
    let datas = res;
    console.log(datas)
    // let productData = datas.map((obj: any) => obj.doc);
    let productData=res.docs;
    if (search != null && search != "") {
      let value = productData.filter((ob: any) => ob.name == search||ob.phonenumber==search||ob.status.toLowerCase()==search.toLowerCase())
      if(value==""){
        this.toastr.warning("No such data exist")
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
