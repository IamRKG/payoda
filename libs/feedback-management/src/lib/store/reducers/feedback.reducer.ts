import * as fromFeedback from '../actions/feedback.actions';
import { Feedback } from '../../models/feedback.model';

export interface FeedbackState {
  data: Feedback[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: FeedbackState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromFeedback.FeedbackAction
): FeedbackState {
  switch (action.type) {
    case fromFeedback.GET_ALL_FEEDBACK: {
      return {
        ...state,
        loading: true
      };
    }
    case fromFeedback.GET_ALL_FEEDBACK_SUCCESS: {
      const data = action.props;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case fromFeedback.GET_ALL_FEEDBACK_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromFeedback.CREATE_FEEDBACK: {
      const data: any = action.props;

      return {
        ...state,
        loading: true,
        data
      };
    }
    case fromFeedback.CREATE_FEEDBACK_SUCCESS: {
      const data: any = action.props;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case fromFeedback.CREATE_FEEDBACK_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    case fromFeedback.VIEW_FEEDBACK: {
      const data: any = action.props;
      return {
        ...state,
        loading: true,
        data
      };
    }
  }
  return state;
}

export const getFeedbackLoading = (state: FeedbackState) => state.loading;
export const getFeedbackLoaded = (state: FeedbackState) => state.loaded;
export const getFeedback = (state: FeedbackState) => state.data;
