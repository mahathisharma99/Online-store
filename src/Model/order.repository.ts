import { StaticDataSource } from './static.datasource';
import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class OrderRepository
{
  private orders:Order[]=[];
  constructor(private datasource:StaticDataSource)
  { 
     

  }
  getOrder()
  {
      return this.orders;
  }

  saveOrder(Order:Order):Observable<Order> 
  {
      return this.datasource.saveOrder(Order);  
  }
}