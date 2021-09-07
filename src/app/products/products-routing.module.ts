import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthGuard } from '../auth.guard';
import { EditProductsComponent } from '../edit-products/edit-products.component';
import { ProductcrudComponent } from '../productcrud/productcrud.component';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  
  {path:'',component:ProductcrudComponent,canActivate:[AuthGuard,RoleGuard]},
  
  {path:'add-product',component:AddProductComponent,canActivate:[AuthGuard,RoleGuard]},
  
  {path:'edit-products/:id/:rev',component:EditProductsComponent,canActivate:[AuthGuard,RoleGuard]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
