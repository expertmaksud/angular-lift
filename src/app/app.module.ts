import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutModule } from '@angular/cdk/layout';


import { CoreModule } from './core/core.module';
import { ApplicationsModule } from './modules/applications/applications.module';
import { AppRoutingModule } from './app-routing.module';
import { PreScreenerModule } from './modules/pre-screener/pre-screener.module';
import { ScreenerModule } from './modules/screener/screener.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,

    LayoutModule,
    CoreModule,
    ApplicationsModule,
    AppRoutingModule,
    PreScreenerModule,
    ScreenerModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
