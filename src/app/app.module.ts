import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UsersComponent } from './users/users.component';
import { ProductcrudComponent } from './productcrud/productcrud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';

import { GoogleChartsModule } from 'angular-google-charts';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHeaderComponent,
    UsersComponent,
    ProductcrudComponent,
    DashboardComponent,
    AddProductComponent,
    AdminOrdersComponent,
    EditProductsComponent,
    FooterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
