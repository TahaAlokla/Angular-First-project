import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OrderComponent,
    ProductComponent,
    AdminProductComponent,
    AdminOrderComponent,
    ShoppingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
