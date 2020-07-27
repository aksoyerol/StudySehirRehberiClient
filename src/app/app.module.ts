import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CityComponent } from './city/city.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { NgxGalleryModule } from 'ngx-gallery';
@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      CityComponent,
      CityDetailComponent,
      NgxGalleryModule
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
