import { TestBed } from '@angular/core/testing';

import { UserComponentService } from './user-component.service';

describe('UserComponentService', () => {
  let service: UserComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
