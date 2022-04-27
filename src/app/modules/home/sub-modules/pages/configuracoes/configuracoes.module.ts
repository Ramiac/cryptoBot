import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfiguracoesComponent } from './configuracoes.component';
import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';

import {MatSelectModule} from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ConfiguracaoGridComponent } from './components/configuracao-grid/configuracao-grid.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    ConfiguracoesComponent,
    ConfiguracaoGridComponent
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule
  ]
})
export class ConfiguracoesModule { }
