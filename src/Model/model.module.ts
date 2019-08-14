import { Cart } from './../app/store/cart.model';
import { NgModule } from '@angular/core';
import { StaticDataSource } from './static.datasource';
import { ProductRepository } from './product.repository';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';

@NgModule
({
 
providers:[ProductRepository,StaticDataSource,Order,OrderRepository, Cart] 
})

export class ModelModule
{
    
}