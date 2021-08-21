import axios from "axios";


const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
var   startUrl='https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_products';
const basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);
    
export class products{
    static getAllData(){
        const url=startUrl+"/_all_docs?include_docs=true";
        return axios.get(url,{headers:{Authorization:basicAuth}});
    }

    
     
}