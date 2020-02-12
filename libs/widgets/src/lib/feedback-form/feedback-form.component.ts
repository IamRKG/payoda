import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../../feedback-management/src/lib/store';

@Component({
  selector: 'payoda-workspace-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  @Input() feedbackForm: any;
  @Input() performances: string[];
  @Input() productUsedSince: any;
  //@Output() changed = new EventEmitter<boolean>();
  constructor(private store: Store<fromStore.FeedbackState>) {}

  // onChange() {
  //   this.changed.emit(this.feedbackForm.value);
  // }

  ngOnInit() {}
}
