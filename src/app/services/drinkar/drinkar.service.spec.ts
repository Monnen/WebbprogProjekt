import { TestBed } from '@angular/core/testing';

import { DrinkarService } from './drinkar.service';

describe('DrinkarService', () => {
  let service: DrinkarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
