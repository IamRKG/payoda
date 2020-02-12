import { TestBed } from '@angular/core/testing';

import { FeedbackListResolverService } from './feedback-list-resolver.service';

describe('FeedbackListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedbackListResolverService = TestBed.get(FeedbackListResolverService);
    expect(service).toBeTruthy();
  });
});
