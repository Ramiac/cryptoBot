import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './sub-modules/pages/home/home.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomeViewComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    MatCardModule,
    MatButtonModule,
  ]
})
export class HomeModule { }
