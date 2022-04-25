import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewComponent } from './modules/home/pages/home-view/home-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeViewComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/sub-modules/pages/home/home.module')
          .then((m) => m.HomeModule),
      },
      {
        path: 'config',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/sub-modules/pages/configuracoes/configuracoes.module')
          .then((m) => m.ConfiguracoesModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
