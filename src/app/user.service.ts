import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestService } from './rest.service';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loginSubject = new BehaviorSubject<any>(this.getUser()); //observable

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
//observable
  getUser() {
    let admin = localStorage.getItem('LOGGED_IN_USER');
    if (admin) {
      return JSON.parse(admin);
    }
    return null;
  }

}
