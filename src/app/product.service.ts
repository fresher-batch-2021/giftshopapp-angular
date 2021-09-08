import { Injectable } from '@angular/core';
import { Product } from './product';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private restService:RestService) { }

  addData(product:Product){
    return this.restService.addData(product,'giftshop')
  }
  getAllData(){

    return this.restService.getAllDataByType('products');
  }
  getDataById(id :string){

    return this.restService.getDataById('giftshop', JSON.parse(id));
    
  }
  deleteData(id:string,rev:string){
    const deleteObj={
      database:'giftshop',
      id:id,
      rev:rev
    }
    return this.restService.deleteData(deleteObj);
  }
  updateData(updateObj:Product){
    
    let updateData={
      database:"giftshop",
      id:updateObj._id,
      rev:updateObj._rev,
      changedValue:updateObj
    };
    return this.restService.updateData(updateData)
  }
}
