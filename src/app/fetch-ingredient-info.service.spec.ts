import { TestBed } from '@angular/core/testing';

import { FetchIngredientInfoService } from './fetch-ingredient-info.service';

describe('FetchIngredientInfoService', () => {
  let service: FetchIngredientInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchIngredientInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
