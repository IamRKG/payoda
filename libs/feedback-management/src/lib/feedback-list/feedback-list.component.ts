import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Feedback } from '../models/feedback.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'payoda-workspace-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  subscription: any;
  feedback: Feedback[];
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'phoneNumber',
    'productName',
    'performance',
    'productUsedSince'
  ];
  constructor(
    private store: Store<fromStore.FeedbackState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(new fromStore.getAllFeedback());
    this.subscription = this.store
      .select(fromStore.getlistFeedback)
      .subscribe(feedback => {
        if (Array.isArray(feedback)) {
          this.feedback = feedback;
        }
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  add() {
    this.router.navigate(['feedback/add']);
  }
}
