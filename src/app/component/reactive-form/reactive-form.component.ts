import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  public validatorOptions = {
    cardNumberLength: 16,
    monthLength: 2,
    minMonth: 1,
    maxMonth: 12,
    yearLength: 4,
    currentYear: new Date().getFullYear(),
    maxYear: new Date().getFullYear()+3,
    cvvLength: 3,
  };

  cardNumberModel: string = '';

  public form: FormGroup = new FormGroup({
    cardNumber: new FormControl('', [Validators.required, this.digitOnlyValidator(), this.lengthValidator(this.validatorOptions.cardNumberLength)]),
    cardholderName: new FormControl('', [Validators.required, Validators.pattern(new RegExp(/^[A-Za-z\-\ ]+$/))]),
    month: new FormControl('', [Validators.required, this.digitOnlyValidator(), this.lengthValidator(this.validatorOptions.monthLength), this.rangeValidator(this.validatorOptions.minMonth, this.validatorOptions.maxMonth)]),
    year: new FormControl('', [Validators.required, this.digitOnlyValidator(), this.lengthValidator(this.validatorOptions.yearLength), this.rangeValidator(this.validatorOptions.currentYear, this.validatorOptions.maxYear)]),
    cvv: new FormControl('', [Validators.required, this.digitOnlyValidator(), this.lengthValidator(this.validatorOptions.cvvLength)]),
 });

 ngOnInit() { 
    this.form.valueChanges.subscribe(it => {
      console.log(this.form.value)
      this.cardNumberModel = this.form.controls['cardNumber'].getRawValue();
    });
  }

  validateDisableForm(): boolean {
    if (!this.form.invalid) {
      return false;
    }
    return true;
  }

  submit() {
    if (this.form.valid) {
      // console.log(this.form.value)
      // this.submitForm.emit(this.form.value);
    }
  }

  digitOnlyValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isDigit = new RegExp(/^[0-9]+$/).test(control.value);
      const hasValue = control.value && control.value.length;
      return hasValue && !isDigit ? { digitOnly: { value: control.value } } : null;
    };
  }

  lengthValidator(length: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const hasValue = control.value && control.value.length;
      const isLengthValid = hasValue && control.value.length !== length;
      return isLengthValid ? { length: { value: control.value } } : null;
    };
  }

  rangeValidator(amountFrom: number, amountTo: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const hasValue = control.value && control.value.length;
      const rangeValid = hasValue && !(control.value >= amountFrom && control.value <= amountTo);
      return rangeValid ? { range: { value: control.value } } : null;
    };
  }

  addZero(form: AbstractControl) {
    if (form.value && !isNaN(form.value)) {
      const value = form.value as string;
      if (value.length === 1) {
        form.setValue('0'+form.value);
      }
    }
  }
}
