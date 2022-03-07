import { TestBed } from '@angular/core/testing';

import { FetchDrinkByNameService } from './fetch-drink-by-name.service';

describe('FetchDrinkByNameService', () => {
  let service: FetchDrinkByNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDrinkByNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
