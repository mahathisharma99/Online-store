import { Cart } from './../store/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cartsummary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart:Cart ) { }

  ngOnInit() {
  }

}
