import { TestBed } from '@angular/core/testing';

import { FetchRandomDrinkService } from './fetch-random-drink.service';

describe('FetchRandomDrinkService', () => {
  let service: FetchRandomDrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRandomDrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
