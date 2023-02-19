import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService implements OnDestroy {

  private _someVar: number = 0;

  private subject$ = new Subject<string>();
  private behaviorSubject$ = new BehaviorSubject<string>("initial");

  hasApiFailure$ = new BehaviorSubject<boolean>(false);
  destroy$ = new Subject<void>();

  constructor() { }

  set someVar(value: number) {
    this._someVar = value;
  }

  get someVar(): number {
    return this._someVar;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  subscribeToApiFailures(_callback: any) {
    this.hasApiFailure$.pipe(takeUntil(this.destroy$)).subscribe((apiFailed) => {
      // console.log('apiFailed: ', apiFailed);
      if (apiFailed) {
        _callback();
      }
    });
  }

  sendMessage(msg: string) {
    this.subject$.next(msg);
    this.behaviorSubject$.next(msg);
  }

  recieveMessage(): Observable<string> {
    return this.subject$.asObservable();
  }

}
