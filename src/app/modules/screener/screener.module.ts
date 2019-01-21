import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule, DialogModule, ConfirmDialogModule, DropdownModule, MultiSelectModule } from 'primeng/primeng';
import { MaterialModule } from '../../material';
import { ScreenerLayoutComponent } from './screener-layout/screener-layout.component';
import { ScreenerResourcesComponent } from './screener-resources/screener-resources.component';
import { ScreenerResourcesGridComponent } from './screener-resources/screener-resources-grid/screener-resources-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule, ButtonModule, DialogModule, ConfirmDialogModule, DropdownModule, MultiSelectModule,
    MaterialModule
  ],
  declarations: [ScreenerLayoutComponent, ScreenerResourcesComponent, ScreenerResourcesGridComponent],
  entryComponents: [ScreenerResourcesGridComponent]
})
export class ScreenerModule { }
