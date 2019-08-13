import { Injectable } from "@angular/core";
import { Product } from './product.model';
import {Observable,from} from "rxjs";
@Injectable()
export class StaticDataSource
{
    private products: Product[]= [
      new Product(1,"Basket","Kitchen","Red in color with flowers on it",150),
      new Product(2,"T shirt","Clothing","Navy blue in color",259),
      new Product(3,"Sport Shoes","Footwear","In a combination of grey and yellow",1200),
      new Product(4,"Dress","Clothing","lacy dress with full sleeves",800),
      new Product(5,"Knife set","Kitchen","A set of 3 knifes",760),
      new Product(6,"Slippers","Footwear","A pair of footwear with white and black combo",600),
      new Product(7,"Saree","Clothing","Pattu saree from kanchi",3000),
      new Product(8,"Jeans","Clothing","Shaded jeans with ",450),
    ];
    constructor(){}

    getProducts(): Observable<Product[]>
    {
        return from ([this.products]);
    }
    
}