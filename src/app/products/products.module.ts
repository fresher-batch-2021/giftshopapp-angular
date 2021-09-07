import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductcrudComponent } from '../productcrud/productcrud.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from '../search.pipe';
import { EditProductsComponent } from '../edit-products/edit-products.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    
    ProductcrudComponent,
    EditProductsComponent,
    AddProductComponent
    // SearchPipe
    
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    DataTablesModule,
    
    FormsModule,
    ReactiveFormsModule,
    // GoogleChartsModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,

  ]
  
  
})
export class ProductsModule { }
