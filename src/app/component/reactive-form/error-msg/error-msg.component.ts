import { AfterViewChecked, ChangeDetectorRef, Input, OnChanges } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { TranslateService } from "@ngx-translate/core";
// import * as en from '../../../../assets/languages/en.json';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss']
})
export class ErrorMsgComponent implements AfterViewChecked, OnChanges {

  constructor(private cdRef: ChangeDetectorRef) { }

  @Input() control?: FormControl;
  @Input() controlName?: string;

  ngAfterViewChecked(): void {
    this.cdRef.detectChanges();
  }

  ngOnChanges(changes: any): void {
    
    if (changes['control']) {
       this.control = changes['control'].currentValue;
    }
  }

  get controlNameMsg() {
    let msg = '';
    switch(this.controlName) {
      case 'cardNumber': msg = 'Card Number'; break;
      case 'cardholderName': msg = 'Cardholder Name'; break;
      case 'month': msg = 'Month'; break;
      case 'year': msg = 'Year'; break;
      case 'cvv': msg = 'CVV/CVC'; break;
    }
    return msg;
  }

  get touched() {
    return this.control && this.control.touched;
  }

  get errors() {
    return this.control ? this.control.errors || {} : {};
  }

}
