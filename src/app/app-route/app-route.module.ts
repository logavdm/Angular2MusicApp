

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';
import {HomeComponent} from '../home/home.component';
import { AppRouteRoutingModule } from './app-route-routing.module';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: HomeComponent },
  
];


@NgModule({
  imports: [
    CommonModule,
    AppRouteRoutingModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRouteModule { }
