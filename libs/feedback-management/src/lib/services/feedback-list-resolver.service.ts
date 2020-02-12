import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FeedbackListResolverService {
  constructor(
    private store: Store<fromStore.FeedbackState>,
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(new fromStore.getAllFeedback());
  }
}
