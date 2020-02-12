import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Feedback } from '../models/feedback.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/';

  getFeedback() {
    return this.http
      .get<Feedback[]>(this.url + `${'feedback'}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createFeedBack(Feedback: Feedback) {
    return this.http
      .post<Feedback>(this.url + `${'feedback'}`, Feedback)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
