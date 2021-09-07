import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private restService:RestService) { }

  addData(product:any){
    return this.restService.addData(product,'giftshop')
  }
  getAllData(){

    return this.restService.getAllDataByType('products');
  }
  getDataById(id :any){
    return this.restService.getDataById('giftshop', id);
    
  }
  deleteData(id:string,rev:string){
    const deleteObj={
      database:'giftshop',
      id:id,
      rev:rev
    }
    return this.restService.deleteData(deleteObj);
  }
  updateData(updateObj:any){
    
    let updateData={
      database:"giftshop",
      id:updateObj.id,
      rev:updateObj.rev,
      changedValue:updateObj.changedValue
    };
    return this.restService.updateData(updateData)
  }
}
