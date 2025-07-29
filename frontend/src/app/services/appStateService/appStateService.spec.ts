import { TestBed } from '@angular/core/testing';

import { AppState } from './appStateService';

describe('AppState', () => {
  let service: AppState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
