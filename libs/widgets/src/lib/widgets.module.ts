import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from './data-table/data-table.component';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSortModule
  ],
  declarations: [FeedbackFormComponent, DataTableComponent],
  exports: [FeedbackFormComponent, DataTableComponent]
})
export class WidgetsModule {}
