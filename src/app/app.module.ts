import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {DiscoverComponent,NewComponent,RecommandComponent,TopTenComponent,
  MobileStoreComponent,SideNavComponent,SideBarComponent}  from './home';

import { TopmenuComponent } from './topmenu/topmenu.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { PaginatorComponent } from './search/paginator/paginator.component';
import { SearchBarComponent } from './search/search-bar/search-bar.component';
import { SearchResultComponent } from './search/search-result/search-result.component';

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopmenuComponent,
    DiscoverComponent,
    NewComponent,
    RecommandComponent,
    TopTenComponent,
    MobileStoreComponent,
    SideNavComponent,
    SideBarComponent,
    PlayerComponent,
    SearchComponent,
    PaginatorComponent,
    SearchBarComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
