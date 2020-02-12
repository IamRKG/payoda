import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Router } from '@angular/router';

function emailDomainValidator(control: FormControl) {
  let email = control.value;
  if (email && email.indexOf('@') != -1) {
    let [_, domain] = email.split('@');
    if (domain !== 'payoda.com') {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      };
    }
  }
  return null;
}
@Component({
  selector: 'payoda-workspace-feedback-add',
  templateUrl: './feedback-add.component.html',
  styleUrls: ['./feedback-add.component.css']
})
export class FeedbackAddComponent implements OnInit {
  feedbackForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
      emailDomainValidator
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$')
    ]),
    productName: new FormControl(''),
    performance: new FormControl(''),
    productUsedSince: new FormControl('')
  });

  performances: string[] = ['Excellent', 'Good', 'Average', 'Bad'];

  constructor(
    private store: Store<fromStore.FeedbackState>,
    private router: Router
  ) {}

  productUsedSince() {
    let pus = [];
    for (let i = 0; i <= 100; i++) {
      pus.push(i);
    }
    return pus;
  }
  next() {
    if (this.feedbackForm.valid) {
      this.store.dispatch(new fromStore.viewFeedback(this.feedbackForm.value));
      this.router.navigate(['feedback/view']);
    }
  }
  ngOnInit() {}
}
