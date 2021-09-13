import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { AuthGuard } from '../auth.guard';
import { EditProductsComponent } from '../edit-products/edit-products.component';
import { productListComponent } from '../productList/productList.component';
import { RoleGuard } from '../role.guard';

const routes: Routes = [
  
  {path:'',component:productListComponent,canActivate:[AuthGuard,RoleGuard]},
  
  {path:'add-product',component:AddProductComponent,canActivate:[AuthGuard,RoleGuard]},
  
  // {path:'edit-products/:id/:rev',component:EditProductsComponent,canActivate:[AuthGuard,RoleGuard]},
  {
    path:':id/:rev',children: [
       {
         path:'edit-products',component:EditProductsComponent,canActivate:[AuthGuard,RoleGuard]
       }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
