import { TestBed } from '@angular/core/testing';

import { FetchDrinkByLetterService } from './fetch-drink-by-letter.service';

describe('FetchDrinkByLetterService', () => {
  let service: FetchDrinkByLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDrinkByLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
