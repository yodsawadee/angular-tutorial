import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormComponent } from './reactive-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
// import { screen } from '@testing-library/dom';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;
  let debugElement: DebugElement;

beforeEach(async () => {
  await TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      ReactiveFormsModule,
      FormsModule
    ],
    declarations: [
      ReactiveFormComponent,
      ErrorMsgComponent
    ],
  }).compileComponents();
  
  // create component and test fixture
  fixture = TestBed.createComponent(ReactiveFormComponent);

  // get test component from the fixture
  component = fixture.componentInstance;
  component.ngOnInit();
  // debugElement: DebugElement;
  debugElement = fixture.debugElement;

  // const cardNumberInputErrorElement = screen.getByTestId('number-input-error');
  // const cardholderNameInputErrorElement = screen.getByTestId('name-input-error');
  // const monthInputErrorElement = screen.getByTestId('month-input-error');
  // const yearInputErrorElement = screen.getByTestId('year-input-error');
  // const cvvInputErrorElement = screen.getByTestId('cvv-input-error');
});

// function findEl<T>(
//   fixture: ComponentFixture<T>,
//   testId: string
// ): DebugElement {
//   return fixture.debugElement.query(
//     By.css(`[data-test-id="${testId}"]`)
//   );
// }

// function click<T>(
//   fixture: ComponentFixture<T>,
//   testId: string
// ): void {
//   const element = findEl(fixture, testId);
//   const event = makeClickEvent(element.nativeElement);
//   element.triggerEventHandler('click', event);
// }

// function makeClickEvent(
//   target: EventTarget
// ): Partial<MouseEvent> {
//   return {
//     preventDefault(): void {},
//     stopPropagation(): void {},
//     stopImmediatePropagation(): void {},
//     type: 'click',
//     target,
//     currentTarget: target,
//     bubbles: true,
//     cancelable: true,
//     button: 0
//   };
// }

// function expectText<T>(
//   fixture: ComponentFixture<T>,
//   testId: string,
//   text: string,
// ): void {
//   const element = findEl(fixture, testId);
//   const actualText = element.nativeElement.textContent;
//   expect(actualText).toBe(text);
// }

it('form invalid when empty', () => {
  expect(component.form.valid).toBeFalsy();
});

it('Card Number field validity', () => {
  let cardNumber = component.form.controls['cardNumber'];
  expect(cardNumber.valid).toBeFalsy();

  // cardNumber field is required
  let errors = cardNumber.errors || {};
  expect(errors['required']).toBeTruthy();

  // Set cardNumber to something
  cardNumber.setValue("11111111");
  errors = cardNumber.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['digitOnly']).toBeFalsy();
  expect(errors['length']).toBeTruthy();

  // Set cardNumber to something correct
  cardNumber.setValue("1234567890123456");
  errors = cardNumber.errors || {};
  expect(errors['required']).toBeFalsy();
  expect(errors['digitOnly']).toBeFalsy();
  expect(errors['length']).toBeFalsy();
});

it('submitting a form', () => {
  expect(component.form.valid).toBeFalsy();
  component.form.controls['cardNumber'].setValue("1234567890123456");
  component.form.controls['cardholderName'].setValue("cardholderName something");
  component.form.controls['month'].setValue("02");
  component.form.controls['year'].setValue("2023");
  component.form.controls['cvv'].setValue("123");
  expect(component.form.valid).toBeTruthy();

  // Trigger the login function
  component.submit();

  // Now we can check to make sure the emitted value is correct
  expect(component.form.controls['cardNumber'].getRawValue()).toBe("1234567890123456");
  expect(component.form.controls['cardholderName'].getRawValue()).toBe("cardholderName something");
});

it('should require valid year', () => {
  component.form.setValue({
    "cardNumber": "1234567890123456", 
    "cardholderName": "cardholderName something", 
    "month": "02", 
    "year": "2029", 
    "cvv": "123"
  });

  expect(component.form.valid).toEqual(false);
})

// class TestComponent {
//   user = { username: 'peeskillet' };
// }

it('Card Number input error', () => {
  // let fixture = TestBed.createComponent(TestComponent);
  const fixture = TestBed.createComponent(ReactiveFormComponent);
  fixture.detectChanges();
  fixture.whenStable().then(() => {
    let cardNumberInput = fixture.debugElement.query(By.css('[data-test-id="number-input"]')).nativeElement;
    // let el = input.nativeElement;
    expect(cardNumberInput.value).toBe('');

    cardNumberInput.value = '123e';
    cardNumberInput.dispatchEvent(new Event('input'));

    expect(cardNumberInput.value).toBe('123e');

    fixture.componentInstance.form.controls['cardNumber'].setValue("123e");
    expect(fixture.componentInstance.form.controls['cardNumber'].getRawValue()).toBe("123e");
    // expect(fixture.componentInstance.user.username).toBe('someValue');
  });

  // const cardNumberInput = findEl(fixture, 'number-input').nativeElement;
  // cardNumberInput.value = '123e';
  // expectText(fixture, 'number-input', '');

  // const cardNumberInput = fixture.debugElement.query(
  //   By.css('[data-test-id="number-input"]')
  // ).nativeElement;
  // cardNumberInput.value = '123e';
  // expect(cardNumberInput.textContent).toBe('123e');

  // const event = document.createEvent('Event');
  // event.initEvent('input', true, false);
  // cardNumberInput.dispatchEvent(event);

  // fixture.detectChanges();

  // Assert
  // expectText(fixture, 'number-input', '123e');

  // const cardNumberInputError = findEl(fixture, 'number-input-error').nativeElement;
  // const cardNumberInputError = fixture.debugElement.query(
  //   By.css('[data-test-id="number-input-error"]')
  //   );
  // expect(cardNumberInputError.nativeElement.textContent).toBe('Invalid Card Number');

  // const submitButton = debugElement.query(
  //   By.css('[data-test-id="submit-button"]')
  // );
  // submitButton.triggerEventHandler('click', null);
  // click(fixture, 'decrement-button');
});

// it(`should have as title 'angular-project-demo'`, () => {
//   const fixture = TestBed.createComponent(ReactiveFormComponent);
//   const app = fixture.debugElement.componentInstance;
//   expect(app.title).toEqual('angular-project-demo');
// });

// it('increments the count', () => {
//   // Act
//   const cardNumberInputErrorElement = debugElement.query(
//     By.css('[data-test-id="number-input-error"]')
//   );
//   cardNumberInputErrorElement.triggerEventHandler('click', null);

//   // Assert
//   const countOutput = debugElement.query(
//     By.css('[data-test-id="count"]')
//   );
//   expect(countOutput.nativeElement.textContent).toBe('1');
// });

});
