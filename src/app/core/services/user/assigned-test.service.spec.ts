import { TestBed } from '@angular/core/testing';

import { AssignedTestService } from './assigned-test.service';

describe('AssignedTestService', () => {
  let service: AssignedTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
