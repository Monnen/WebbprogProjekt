import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInfoComponent } from './ingredient-info.component';

describe('IngredientInfoComponent', () => {
  let component: IngredientInfoComponent;
  let fixture: ComponentFixture<IngredientInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
