import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryComponent } from './transactions/category/category.component';
import { appRoutingModule } from './app.routing.module';
import { CustomMaterialModule } from '../app/shared/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatRadioModule} from '@angular/material/radio';
import {registerLocaleData} from '@angular/common'
import localeHr from '@angular/common/locales/hr'

registerLocaleData(localeHr, "hr")

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    appRoutingModule,
    CustomMaterialModule,
    FormsModule,
    HttpClientModule,
    MatRadioModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "hr"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
