import { TestBed } from '@angular/core/testing';

import { UnsubscibeObsService } from './unsubscibe-obs.service';

describe('UnsubscibeObsService', () => {
  let service: UnsubscibeObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnsubscibeObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
