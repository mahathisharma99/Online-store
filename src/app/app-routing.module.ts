import { StoreFirstGaurd } from './store/storefirst.guard';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [];

@NgModule({
  imports: [BrowserModule,StoreModule,
    RouterModule.forRoot([
     {path:'store',component:StoreComponent,canActivate:[StoreFirstGaurd]},
    {path:'cart',component:CartDetailsComponent,canActivate:[StoreFirstGaurd]},
    {path:'checkout',component:CheckOutComponent,canActivate:[StoreFirstGaurd]},
    {path:'',redirectTo:'/store',pathMatch: 'full'}
    ]
     
    )],
    providers:[StoreFirstGaurd],
  exports: [RouterModule]
})
export class AppRoutingModule { }
