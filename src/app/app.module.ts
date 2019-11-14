import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HikeModule } from './hike/hike.module';
import { HomeMudule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { HikeListeComponent } from './hike/hike-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule, HikeModule, HttpClientModule, HomeMudule,
    RouterModule.forRoot([
      {path: 'homme', component: HomeComponent },
      {path: 'hike', component: HikeListeComponent },
      {path: '', redirectTo: 'home', pathMatch: 'full' },
      {path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
