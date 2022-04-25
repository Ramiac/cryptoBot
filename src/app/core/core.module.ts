import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav'

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MatButtonModule } from '@angular/material/button';
import { MenuContentComponent } from './components/menu-content/menu-content.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    MainContentComponent,
    MenuContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    BodyComponent,
    MainContentComponent
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} já foi loadado. Fazer importação Core module somente no AppModule.`);
    }
  }
}
