import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { productListComponent } from '../productList/productList.component';
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
import { PageComponent } from '../page/page.component';
import { EditProductModalComponent } from '../edit-product-modal/edit-product-modal.component';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    
    productListComponent,
    EditProductsComponent,
    AddProductComponent,
    PageComponent,
    // SearchPipe
    AddProductModalComponent,
    EditProductModalComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    DataTablesModule,
    
    FormsModule,
    ReactiveFormsModule,
    // GoogleChartsModule.forRoot(),
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ProductsRoutingModule,
    
    MatDialogModule,MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule

  ]
  
  
})
export class ProductsModule { }
