import { Injectable } from '@angular/core';
import { Orders } from './orders';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private restService:RestService) { }

  getAllOrders(){
   return this.restService.getAllDataByType('orders')
  }
  getOrderById(id:string):any{
    return this.restService.getDataById('giftshop', id);
  }
  updateOrder(updateObj:any,id:string){


    const changedObj = {
      database: "giftshop",
      id:id,
      rev:updateObj._rev,
      changedValue: updateObj
    };
    return this.restService.updateData(changedObj)
  }

  deleteOrder(id:string,rev:string){
    const deleteObj = {
      database: 'giftshop',
      id: id,
      rev: rev
    };
    return this.restService.deleteData(deleteObj)
  }
}
