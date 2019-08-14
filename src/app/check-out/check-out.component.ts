import { Order } from './../../Model/order.model';
import { Component, OnInit } from '@angular/core';
import {OrderRepository} from './../../Model/order.repository';
import {NgForm} from '@angular/forms';

@Component({

  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']

})
export class CheckOutComponent implements OnInit {
 

  orderSent :boolean=false;
  submitted :boolean=false;
  constructor(public repository:OrderRepository,public order:Order ) { }

  ngOnInit() {
  }

  SubmitOrder(form :NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      this.repository.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.orderSent=true;
        this.submitted=false;

      })
    }
    }


}
