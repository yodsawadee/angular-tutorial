import { DatePipe, DecimalPipe } from '@angular/common';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { isNaN, parseInt } from 'lodash-es';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements OnDestroy {

  private _someVar: number = 0;

  private subject$ = new Subject<string>();
  private behaviorSubject$ = new BehaviorSubject<string>("initial");

  hasApiFailure$ = new BehaviorSubject<boolean>(false);
  destroy$ = new Subject<void>();

  constructor(private decimalPipe: DecimalPipe, private datePipe: DatePipe) { }

  set someVar(value: number) {
    this._someVar = value;
  }

  get someVar(): number {
    return this._someVar;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy!!')
    // this.destroy$.next();
    this.destroy$.complete();
    this.subject$.complete();
    this.behaviorSubject$.complete();
  }

  subscribeToApiFailures(_callback: any) {
    this.hasApiFailure$.pipe(takeUntil(this.destroy$)).subscribe((apiFailed) => {
      console.log('apiFailed: ', apiFailed);
      if (apiFailed) {
        _callback();
      }
    });
  }

  // ==============================================================================================
  // private subject$ = new Subject<string>();
  sendMessage(msg: string) {
    this.subject$.next(msg);
  }
  sendBehaviorSubjectMessage(msg: string) {
    this.behaviorSubject$.next(msg);
  }

  recieveMessage(): Observable<string> {
    return this.subject$.asObservable();
  }
  recieveMessageFromBehaviorSubject(): Observable<string> {
    return this.behaviorSubject$.asObservable();
  }
  // ==============================================================================================

  textDisplay(value: string): string {
    return value || '-';
  }

  amountWithCurrency(amount: number | string, currency: string): string {
    if (amount) { //if (!isNaN(parseInt(amount))) {
      const amountFormatted = this.decimalPipe.transform(amount, '1.2-2');
      // if amount is correct, currency is correct ==> display 200,000.00 THB
      if (currency) return `${amountFormatted} ${currency}`;
      // if amount is correct, currency is incorrect ==> display 200,000.00 -
      return `${amountFormatted} -`;
    }
    // if amount is incorrect, currency is correct ==> display - THB
    if (currency) return `- ${currency}`;
    // if amount is incorrect, currency is incorrect ==> display -
    return '-';
  }

  numberFormat(amount: number | string, format = '1.0-0'): string {
    if (amount) { //if (!isNaN(parseInt(amount))) {
      return this.decimalPipe.transform(amount, format) ?? '-';
    }
    return '-';
  }

  dateFormat(date: Date | string | number, format: string): string {
    if (date) {
      return this.datePipe.transform(date, format) ?? '-';
    }
    return '-';
  }

}
