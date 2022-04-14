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
        outlet: 'mainContent',
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./modules/home/home.module')
          .then((m) => m.HomeModule),
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
