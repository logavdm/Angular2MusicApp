import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule }  from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ng2-responsive'
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
import { BrowseComponent } from './browse/browse.component';
import { QuickFindComponent } from './browse/quick-find/quick-find.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistListComponent } from './artist/artist-list/artist-list.component';
import { TopArtistComponent } from './artist/top-artist/top-artist.component';

const routes: Routes = [  
  { path: '', component:HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'browse', component: BrowseComponent },
  { path: 'artist', component: ArtistComponent },
  { path: '**', component: HomeComponent },
  
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
    SearchResultComponent,
    BrowseComponent,
    QuickFindComponent,
    ArtistComponent,
    ArtistListComponent,
    TopArtistComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    ResponsiveModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
