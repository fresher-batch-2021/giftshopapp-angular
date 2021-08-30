import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { ProductComponent } from './product/product.component';
import { ProductSpecComponent } from './product-spec/product-spec.component';
import { CartComponent } from './cart/cart.component';


import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UsersComponent } from './users/users.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    OrderNowComponent,
    ProductComponent,
    ProductSpecComponent,
    CartComponent,
    HomeComponent,
    AdminHeaderComponent,
    UsersComponent,
    ProductcrudComponent,
    DashboardComponent,
    AddProductComponent,
    AdminOrdersComponent,
    SearchBarComponent,
    EditProductsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
