import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordinfoModule } from '../../projects/recordinfo/src/lib/recordinfo.module';

import { HttpModule, JsonpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RecordinfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
