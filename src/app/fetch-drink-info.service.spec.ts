import { TestBed } from '@angular/core/testing';

import { FetchDrinkInfoService } from './fetch-drink-info.service';

describe('FetchDrinkInfoService', () => {
  let service: FetchDrinkInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDrinkInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
