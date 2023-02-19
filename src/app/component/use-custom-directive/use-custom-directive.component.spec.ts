import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseCustomDirectiveComponent } from './use-custom-directive.component';

describe('UseCustomDirectiveComponent', () => {
  let component: UseCustomDirectiveComponent;
  let fixture: ComponentFixture<UseCustomDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseCustomDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseCustomDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
