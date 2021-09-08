import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private restService:RestService) { }

  getAllData(){
    return this.restService.getAllDataByType('user')
  }
  
  getDataById(id:string){
    return this.restService.getDataById('giftshop',id)
  }

  updateData(updateObj:Users){

    let changedObj={
      database:'giftshop',
      id:updateObj._id,
      rev:updateObj._rev,
      changedValue:updateObj
    }
    return this.restService.updateData(changedObj);

  }
}
