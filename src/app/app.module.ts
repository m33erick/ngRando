import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HikeModule } from './hike/hike.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HikeModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
