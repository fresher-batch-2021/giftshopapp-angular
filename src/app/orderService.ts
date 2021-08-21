import axios from "axios";

const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
var   startUrl='https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_orders/';
const basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);

export class orders{
    static getOrder(endString:string){
        const url=startUrl+endString;
        alert(url);
        return axios.get(url,{headers:{Authorization:basicAuth}});
    }
    static updateOrder(endString:string,updateObj:any){
        const url=startUrl+endString;
        alert(url);
        return axios.put(url,updateObj,{headers:{Authorization:basicAuth}});
    }
}