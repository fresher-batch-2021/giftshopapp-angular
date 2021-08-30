import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  endpoint:string;
  basicAuth: string;

  constructor(private http:HttpClient) {
    this.endpoint='https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/';
    this.basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);
   }

  // add
  addData(obj:any,urlEnd:string) {
    const url=this.endpoint+urlEnd;
    console.log(url);    
    return this.http.post(url,obj,{headers:{Authorization:this.basicAuth}});
  }

  // getData
  getAllData(database:string):any{

    const url=this.endpoint+database+"/_all_docs?include_docs=true";
    return this.http.get(url,{headers:{Authorization:this.basicAuth}});
}
// get data by id
  getDataById(database:string,id:any){

    const url=this.endpoint+database+'/'+id;
    return this.http.get(url,{headers:{Authorization:this.basicAuth}});
}
// update data
updateData(updateObj:any){
  const database=updateObj.database;
  const id=updateObj.id;
  const rev=updateObj.rev;
  const changedObj=updateObj.changedValue;
  const url=this.endpoint+database+'/'+id+'/?rev='+rev;
  return this.http.put(url,changedObj,{headers:{Authorization:this.basicAuth}});
}
// delete data
deleteData(deleteObj:any){
  const database=deleteObj.database;
  const id=deleteObj.id;
  const rev=deleteObj.rev;
  const url=this.endpoint+database+'/'+id+'/rev?='+rev;
  return this.http.delete(url,{headers:{Authorization:this.basicAuth}});
}
}
