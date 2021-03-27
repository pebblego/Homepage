import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './sharedmodule/material.module';
import { trigger } from '@angular/animations';
import { CookiesComponent } from './cookies/cookies.component';

@NgModule({
  declarations: [
    AppComponent,
    CookiesComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    MaterialModule

    
  ],
  
  providers: [CarouselModule, MaterialModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routeTransitionAnimations = trigger('browserAnimations', []);
