
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { without } from 'lodash';
import { ToastrService } from 'ngx-toastr';
import * as XLSX from 'xlsx';
import { OrderService } from '../order.service';
import { Orders } from '../orders';
import { RestService } from '../rest.service';


@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {

  constructor(private restService: RestService, private toastr: ToastrService, private route: Router,private orderService:OrderService) { }
  orders!: Orders[];
  searchBox: string = "";
  ngOnInit(): void {
    this.orderList();
  }


  orderList() {

    let data = this.orderService.getAllOrders();
    data.subscribe((res: any) => {
      let values:Orders[] = res.docs;
      this.orders = values;

    }, (err: any) => {
      this.toastr.error("Error in getting data")
    });

  }



  update(id: string) {

    let productDatas = this.orderService.getOrderById(id)

    productDatas.subscribe((res: Orders) => {

      let productObj:Orders = res;
      
      productObj.status = 'DELIVERED';

      // now update to api


      this.orderService.updateOrder(productObj).subscribe((response: any) => {

        this.toastr.success("status has been updated")

        this.orderList();

      });
    });

  }

  /**
   * delete function
   * @param id id of element
   * @param rev rev id of element
   */

  delete(id: string, rev: string) {
  
   
    this.orderService.deleteOrder(id,rev).subscribe((res: any) => {

    });
  }

  orderSearch() {

    let search = this.searchBox;

    this.orderService.getAllOrders().subscribe((res: any) => {
      
      let datas = res;
      console.log("result from db",datas)

      let productData:Orders[] = res.docs;

      if (search != null && search != "") {
        let value:Orders[] = productData.filter((ob: Orders) => ob.status.toLowerCase().indexOf(search.toLowerCase()) !=-1 ||ob.name.toLowerCase().indexOf(search.toLowerCase()) != -1  )
        if (value[0] ==null ) {
          this.toastr.warning("","No such data exist",{
          
          
          })
          
          this.orderList();
        }
        else {
          this.orders = value;
        }
      }
      else {
        this.orderList();
      }
    });
  }

  // download excel file
  exportexcel() {

    let fileName = 'orderDetails.xlsx';//name of which file is downloaded
    let element = document.getElementById('ordersTable')//to get the table
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);//convert table data into sheet

    const wb: XLSX.WorkBook = XLSX.utils.book_new();//creating a new workbook obj
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');//adding the sheet data into workbook
    XLSX.writeFile(wb, fileName);//downloading the file
  }

  getBgColor(deliveryStatus:string){
      if(deliveryStatus=='DELIVERED'){
        return '#84dd63';
      }
      else if(deliveryStatus=='ORDERED'){
        return '#0077b6';
        
      }
      else if(deliveryStatus=='CANCELED'){
        return'#e5383b';
      }
      else{
        return 'black';
      }
  }

}
