import { TestBed } from '@angular/core/testing';

import { FetchDrinksByIngredientService } from './fetch-drinks-by-ingredient.service';

describe('FetchDrinksByIngredientService', () => {
  let service: FetchDrinksByIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDrinksByIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
