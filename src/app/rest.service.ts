import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const endpoint=environment.endpoint;
const dbUserName=environment.dbUserName;
const dbPassword=environment.dbPassword;


@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint:string;
  basicAuth: string;

  constructor(private http:HttpClient) {
    this.endpoint= endpoint;///'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
    
    this.basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);
   }

  // add---------------------------------------------------------------------yes
  addData(obj:any,urlEnd:string) {
    const url=this.endpoint+urlEnd;
    console.log(url);    
    return this.http.post(url,obj);
  }

  

  // getData
  getAllData(database:string):any{

    const url=this.endpoint+database+"/_all_docs?include_docs=true";
    return this.http.get(url);
}
 // getData----------------------------------------------------------------yes
 getAllDataByType(type:string):any{

  const url=this.endpoint+"giftshop/_find";
  let requestObj={
    selector:{
      type:type
    }
  }
  return this.http.post(url,requestObj);
}

// get data by id--------------------------------------------------------yes
  getDataById(database:string,id:any){

    const url=this.endpoint+database+'/'+id;
    return this.http.get(url);
}
// update data-----------------------------------------------------------yes
updateData(updateObj:any){
  const database=updateObj.database;
  const id=updateObj.id;
  const rev=updateObj.rev;
  const changedObj=updateObj.changedValue;
  const url=this.endpoint+database+'/'+id+'/?rev='+rev;
  return this.http.put(url,changedObj);
}
// delete data
deleteData(deleteObj:any){
  const database=deleteObj.database;
  const id=deleteObj.id;
  const rev=deleteObj.rev;
  const url=this.endpoint+database+'/'+id+'/?rev='+rev;
  return this.http.delete(url);
}
}
