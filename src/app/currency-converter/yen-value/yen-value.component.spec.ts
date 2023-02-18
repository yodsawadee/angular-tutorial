import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YenValueComponent } from './yen-value.component';

describe('YenValueComponent', () => {
  let component: YenValueComponent;
  let fixture: ComponentFixture<YenValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YenValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YenValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
