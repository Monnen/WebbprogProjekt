import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkInfoComponent } from './drink-info.component';

describe('DrinkInfoComponent', () => {
  let component: DrinkInfoComponent;
  let fixture: ComponentFixture<DrinkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinkInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
