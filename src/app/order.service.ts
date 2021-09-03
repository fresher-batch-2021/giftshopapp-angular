import { Injectable } from '@angular/core';
import axios from "axios";
import { environment } from 'src/environments/environment';

const dbUserName=environment.dbUserName;// 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword=environment.dbPassword;// '3bc2893c0a2a1ec42d9b17840b18447b';
var   startUrl=environment.endpoint+'/giftshop_orders';// 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_orders/';
const basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

   async getAllOrders(){
    const url=startUrl+"_all_docs?include_docs=true";
    const orders:any = await axios.get(url,{headers:{Authorization:basicAuth}});
    return orders.data.rows.map((obj:any)=> obj.doc);
}

 getOrder(id:string){
  const url=startUrl+id;
    return axios.get(url,{headers:{Authorization:basicAuth}});
}

 updateOrder(endString:string,updateObj:any){
    const url=startUrl+endString;
    alert(url);
    return axios.put(url,updateObj,{headers:{Authorization:basicAuth}});
}
}
