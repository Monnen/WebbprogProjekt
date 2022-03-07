import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDrinksComponent } from './popular-drinks.component';

describe('PopularDrinksComponent', () => {
  let component: PopularDrinksComponent;
  let fixture: ComponentFixture<PopularDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularDrinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
