import { RouterModule } from '@angular/router';
import { CheckOutComponent } from './../check-out/check-out.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { StoreComponent } from './store.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import {FormsModule} from '@angular/forms'; 
import { ModelModule } from 'src/Model/model.module';

@NgModule({

  

    imports:[
            ModelModule,
            BrowserModule,
            FormsModule,
            RouterModule
    ],
    declarations:[
        StoreComponent,CartSummaryComponent,CartDetailsComponent,CheckOutComponent
    ],
    exports:[
        StoreComponent,CartDetailsComponent,CheckOutComponent
    ]

})
export class StoreModule
{

}