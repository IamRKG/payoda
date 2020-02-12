import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import * as feedbackActions from '../actions/feedback.actions';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { FeedbackService } from '../../services/feedback.service';

@Injectable()
export class feedbackEffects {
  constructor(
    private actions$: Actions,
    private feedbackService: FeedbackService
  ) {}

  @Effect()
  getFeedback = this.actions$.pipe(
    ofType(feedbackActions.GET_ALL_FEEDBACK),
    switchMap(() => {
      return this.feedbackService.getFeedback().pipe(
        map(feedback => new feedbackActions.getAllFeedbackSuccess(feedback)),
        catchError(error => of(new feedbackActions.getAllFeedbackFail(error)))
      );
    })
  );
  @Effect()
  createFeedback = this.actions$.pipe(
    ofType(feedbackActions.CREATE_FEEDBACK),
    map((action: feedbackActions.createFeedback) => action.props),
    switchMap(feedback => {
      return this.feedbackService.createFeedBack(feedback).pipe(
        map(feedback => new feedbackActions.createFeedbackSuccess(feedback)),
        catchError(error => of(new feedbackActions.createFeedbackFail(error)))
      );
    })
  );
}
