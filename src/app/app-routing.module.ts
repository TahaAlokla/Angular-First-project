import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { ProductComponent } from './product/product.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductComponent } from './admin/admin-product/admin-product.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'product', component: ProductComponent },
  { path: 'admin/admin-order', component: AdminOrderComponent },
  { path: 'admin/admin-product', component: AdminProductComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
