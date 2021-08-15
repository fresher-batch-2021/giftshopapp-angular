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
import { AboutUsComponent } from './about-us/about-us.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UsersComponent } from './users/users.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { DatasComponent } from './datas/datas.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    AboutUsComponent,
    HomeComponent,
    AdminComponent,
    AdminHeaderComponent,
    UsersComponent,
    ProductcrudComponent,
    DatasComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
