import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsdValueComponent } from './usd-value.component';

describe('UsdValueComponent', () => {
  let component: UsdValueComponent;
  let fixture: ComponentFixture<UsdValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsdValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsdValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
