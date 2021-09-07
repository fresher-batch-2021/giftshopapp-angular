import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { RoleGuard } from './role.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},

  {path:'admin-header',component:AdminHeaderComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'users',component:UsersComponent,canActivate:[AuthGuard,RoleGuard]},
  // {path:'productcrud',component:ProductcrudComponent,canActivate:[AuthGuard]},
  // {path:'add-product',component:AddProductComponent,canActivate:[AuthGuard]},
  {path:'admin-orders',component:AdminOrdersComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'footer',component:FooterComponent},
  // {path:'edit-products/:id/:rev',component:EditProductsComponent,canActivate:[AuthGuard]},
  {path:'', component:LoginComponent},
  {
    path : 'products',
    loadChildren:()=> import('./products/products.module').then(m=>m.ProductsModule)
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
