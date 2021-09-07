import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { crud } from '../crud';
import { ProductService } from '../product.service';
import { RestService } from '../rest.service';
import { UserService } from '../user.service';
import { ValidationService } from '../validationClass';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})

export class EditProductsComponent implements OnInit {


  public id: string = "";
  constructor(private validator: ValidationService, private route: ActivatedRoute,private router:Router,private restService:RestService,private productService:ProductService) {


  }

  productName: string = "";
  productPrice: number = 0;
  productImage: any;
  productQuantity: number = 0;
  productDescription: string = "";
  file: any;

  crud = new crud();


  ngOnInit(): void {
    this.getDetails()
  }

  onFileUpload(event: any) {
    this.productImage = event.target.files[0].name;
  }

  //  ===========
  getDetails() {
    let id = this.route.snapshot.paramMap.get('id');
    
 
    this.productService.getDataById(id).subscribe((res:any)=>{
      console.table("yesh",res);
      
      let data=res;
      this.productName = data.name;
      this.productPrice = data.price;
      this.productImage = data.imageUrl;
      this.productQuantity = data.quantity;
      this.productDescription = data.description;
    });

  }

  editProduct() {
    let id = this.route.snapshot.paramMap.get('id');
    let rev =this.route.snapshot.paramMap.get('rev')
    
    let changeObj = {
      name:this.productName,
      price: this.productPrice,
      imageUrl:this.productImage,
      quantity: this.productQuantity,
      description: this.productDescription,
      type:"products"
    };


    let updateData={
      id:id,
      rev:rev,
      changedValue:changeObj
    };

    this.productService.updateData(updateData).subscribe((res:any)=>{
      
      this.router.navigate(['products']);
    })

    
  }


}
