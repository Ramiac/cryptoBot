import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './sub-modules/pages/home/home.component';
import { CardCurrencyComponent } from './components/card-currency/card-currency.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    HomeComponent,
    CardCurrencyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    MatCardModule
  ]
})
export class HomeModule { }
