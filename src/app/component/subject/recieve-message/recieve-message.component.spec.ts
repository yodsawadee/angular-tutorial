import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveMessageComponent } from './recieve-message.component';

describe('RecieveMessageComponent', () => {
  let component: RecieveMessageComponent;
  let fixture: ComponentFixture<RecieveMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieveMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecieveMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
