import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { UsersComponent } from './users/users.component';
import { productListComponent } from './productList/productList.component';
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
import { ProductsModule } from './products/products.module';
import { SharedModule } from './shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
// spinner
import { NgxSpinnerModule } from "ngx-spinner";
import { ErrorInterceptor } from './error.interceptor';
import { CaptionDirective } from './caption.directive';
// modal
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminHeaderComponent,
    UsersComponent,
    // productListComponent,
    DashboardComponent,
    // AddProductComponent,
    AdminOrdersComponent,
    // EditProductsComponent,
    FooterComponent,
    CaptionDirective,
    ModalComponent,
    UserLocationComponent,
    
    // SearchPipe
  ],
  imports: [
    BrowserModule,



    BrowserAnimationsModule,
    //  ProductsModule,
    DataTablesModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    GoogleChartsModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),

    AppRoutingModule,
    //modal
    MatDialogModule,MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule,
    //leaflet
    LeafletModule

  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
