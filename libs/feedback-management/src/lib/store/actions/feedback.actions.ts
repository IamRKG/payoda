import { Action } from '@ngrx/store';
import { Feedback } from '../../models/feedback.model';

export const GET_ALL_FEEDBACK = '[FEEDBACK] Get All Feedback';
export const GET_ALL_FEEDBACK_FAIL = '[FEEDBACK] Get All Feedback Fail';
export const GET_ALL_FEEDBACK_SUCCESS = '[FEEDBACK] Get All Feedback Success';

export class getAllFeedback implements Action {
  readonly type = GET_ALL_FEEDBACK;
}

export class getAllFeedbackFail implements Action {
  readonly type = GET_ALL_FEEDBACK_FAIL;
  constructor(public props: any) {}
}

export class getAllFeedbackSuccess implements Action {
  readonly type = GET_ALL_FEEDBACK_SUCCESS;
  constructor(public props: Feedback[]) {}
}

//Create
export const CREATE_FEEDBACK = '[FEEDBACK] Create Feedback';
export const CREATE_FEEDBACK_FAIL = '[FEEDBACK] Create Feedback Fail';
export const CREATE_FEEDBACK_SUCCESS = '[FEEDBACK] Create Feedback Success';

export class createFeedback implements Action {
  readonly type = CREATE_FEEDBACK;
  constructor(public props: Feedback) {}
}

export class createFeedbackFail implements Action {
  readonly type = CREATE_FEEDBACK_FAIL;
  constructor(public props: any) {}
}

export class createFeedbackSuccess implements Action {
  readonly type = CREATE_FEEDBACK_SUCCESS;
  constructor(public props: Feedback) {}
}

//Create
export const VIEW_FEEDBACK = '[FEEDBACK] View Feedback';

export class viewFeedback implements Action {
  readonly type = VIEW_FEEDBACK;
  constructor(public props: Feedback) {}
}

export type FeedbackAction =
  | getAllFeedback
  | getAllFeedbackFail
  | getAllFeedbackSuccess
  | createFeedback
  | createFeedbackFail
  | createFeedbackSuccess
  | viewFeedback;
