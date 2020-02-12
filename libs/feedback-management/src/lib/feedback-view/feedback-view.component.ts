import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Router } from '@angular/router';

@Component({
  selector: 'payoda-workspace-feedback-view',
  templateUrl: './feedback-view.component.html',
  styleUrls: ['./feedback-view.component.css']
})
export class FeedbackViewComponent implements OnInit {
  feedback: any;
  subscription: any;
  constructor(
    private store: Store<fromStore.FeedbackState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.store
      .select(fromStore.getlistFeedback)
      .subscribe(data => (this.feedback = data));
  }

  onSubmit() {
    this.store.dispatch(new fromStore.createFeedback(this.feedback));
    this.router.navigate(['feedback/list']);
  }

  previous() {
    this.router.navigate(['feedback/add']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
