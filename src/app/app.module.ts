import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      CityComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
