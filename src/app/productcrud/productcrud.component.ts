import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-productcrud',
  templateUrl: './productcrud.component.html',
  styleUrls: ['./productcrud.component.css']
})
export class ProductcrudComponent implements OnInit {

  constructor() { }

  products:any;
  
  ngOnInit(): void {
    this.productList();
  }

  
  productList(){



// =============================
const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';

const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);// one space after Basic
const url = "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_products/_all_docs?include_docs=true";//registration url
// _all_docs?include_docs=true =========at end of the url to get data

axios.get(url,{headers:{'Authorization':basicAuth}}).then(res => {

  
    let data =res.data.rows;
    this.products = data.map((obj:any)=>obj.doc);
    console.log(this.products);  

    // alert(this.products);
  }).catch(err =>{
      console.error(err.response.data);
      alert("Unable to get product");
  });
    
  }




  delete(id:string,rev:string){
    const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
    const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
    const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);// one space after Basic
    const url="https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/giftshop_products/"+id +"?rev="+ rev;
    

    axios.delete(url,{headers:{Authorization:basicAuth}}).then(res =>{
      
      alert("deleted successfully");
      window.location.href='/productcrud';

    }).catch(err=>{
      console.log("Error"+err.data);
    });
  }


  

}
