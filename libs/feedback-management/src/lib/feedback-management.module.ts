import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackAddComponent } from './feedback-add/feedback-add.component';
import { FeedbackViewComponent } from './feedback-view/feedback-view.component';

import { MatCardModule } from '@angular/material/card';

import { WidgetsModule } from '@payoda-workspace/widgets';

import { reducer, effects } from './store';

import { EffectsModule } from '@ngrx/effects';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

//import { FeedbackListResolverService } from './services/feedback-list-resolver.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'list',
        component: FeedbackListComponent
        // resolve: {
        //   feedbackList: FeedbackListResolverService
        // }
      },
      { path: 'add', component: FeedbackAddComponent },
      { path: 'view', component: FeedbackViewComponent },
      { path: '', redirectTo: 'add', pathMatch: 'full' }
    ]),
    StoreModule.forFeature('feedback', reducer),
    EffectsModule.forFeature(effects),
    MatCardModule,
    WidgetsModule,
    MatButtonModule,
    MatListModule
  ],
  declarations: [
    FeedbackListComponent,
    FeedbackAddComponent,
    FeedbackViewComponent
  ],
  exports: [FeedbackListComponent, FeedbackAddComponent, FeedbackViewComponent]
})
export class FeedbackManagementModule {}
