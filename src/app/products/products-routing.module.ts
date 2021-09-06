import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthGuard } from '../auth.guard';
import { EditProductsComponent } from '../edit-products/edit-products.component';
import { ProductcrudComponent } from '../productcrud/productcrud.component';

const routes: Routes = [
  
  {path:'',component:ProductcrudComponent,canActivate:[AuthGuard]},
  
  {path:'add-product',component:AddProductComponent,canActivate:[AuthGuard]},
  
  {path:'edit-products/:id/:rev',component:EditProductsComponent,canActivate:[AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
