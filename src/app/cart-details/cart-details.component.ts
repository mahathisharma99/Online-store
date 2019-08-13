import { Cart, CartLine } from './../store/cart.model';

import { Component, OnInit } from '@angular/core';

@Component({
 
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
 lines:CartLine[]=[];
  constructor(public cart: Cart) {
    this.lines = cart.Lines;
   }

  ngOnInit() {
  }

}
