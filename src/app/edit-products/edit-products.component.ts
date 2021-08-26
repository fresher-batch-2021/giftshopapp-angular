import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { crud } from '../crud';
import { ValidationService } from '../validationClass';


@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})

export class EditProductsComponent implements OnInit {


  public id: string = "";
  constructor(private validator: ValidationService, private route: ActivatedRoute,private router:Router) {


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
    // alert(id)
    // console.log(id)

    crud.getDataById("giftshop_products", id).then((res: any) => {
      let data = res.data;
      console.table(data);
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
      description: this.productDescription
    };
    let updateData={
      id:id,
      rev:rev,
      database:"giftshop_products",
      changedValue:changeObj
    };
    crud.updateData(updateData).then((res=>{
      this.router.navigate(['../productcrud']);
    }))
  }


}
