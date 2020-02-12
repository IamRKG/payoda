import { async, TestBed } from '@angular/core/testing';
import { FeedbackManagementModule } from './feedback-management.module';

describe('FeedbackManagementModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FeedbackManagementModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FeedbackManagementModule).toBeDefined();
  });
});
