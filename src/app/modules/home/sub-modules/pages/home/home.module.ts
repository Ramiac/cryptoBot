import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardCurrencyComponent } from '../../../components/card-currency/card-currency.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardCurrencyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class HomeModule { }
