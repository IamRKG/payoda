import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';

import * as fromFeedback from './feedback.reducer';

export interface FeedbackState {
  feedback: fromFeedback.FeedbackState;
}

export const reducer: ActionReducerMap<FeedbackState> = {
  feedback: fromFeedback.reducer
};

export const getFeedbackState = createFeatureSelector<FeedbackState>(
  'feedback'
);

export const getFeedback = createSelector(
  getFeedbackState,
  (state: FeedbackState) => state.feedback
);

export const getlistFeedback = createSelector(
  getFeedback,
  fromFeedback.getFeedback
);

export const getFeedbackLoaded = createSelector(
  getFeedback,
  fromFeedback.getFeedbackLoaded
);

export const getFeedbackLoading = createSelector(
  getFeedback,
  fromFeedback.getFeedbackLoading
);
