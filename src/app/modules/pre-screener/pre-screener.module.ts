import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MaterialModule } from '../../material';
import { PreScreenerLayoutComponent } from './pre-screener-layout/pre-screener-layout.component';
import { PreScreenerHomeComponent } from './pre-screener-home/pre-screener-home.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [PreScreenerLayoutComponent, PreScreenerHomeComponent]
})
export class PreScreenerModule { }
