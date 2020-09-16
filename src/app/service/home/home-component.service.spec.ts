import { TestBed } from '@angular/core/testing';

import { HomeComponentService } from './home-component.service';

describe('HomeComponentService', () => {
  let service: HomeComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
