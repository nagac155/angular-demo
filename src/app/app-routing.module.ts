import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './_components/about/about.component';
import { HighchartsComponent } from './_components/highcharts/highcharts.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'cars',
    loadChildren: () => import('./_components/cars/cars.module').then( m => m.CarsModule)
  },
  {
    path: 'scss',
    loadChildren: () => import('./_components/scss/scss.module').then( m => m.ScssModule)
  },
  {
    path: 'highcharts',
    component: HighchartsComponent
  }
];

export const routing = RouterModule.forRoot(routes);
