import { Directive } from '@angular/core';
import { EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';

@Directive({
  selector: '[appDebounceSubmit]'
})
export class DebounceSubmitDirective implements OnInit, OnDestroy {

  @Input() debounceTime = 300;
  @Output() debounceSubmit = new EventEmitter();

  private submits = new Subject();
  private subscription: Subscription;

  constructor() { }

  ngOnInit() {

    this.subscription = this.submits
      .pipe(debounceTime(this.debounceTime))
      .subscribe(e => {
        this.debounceSubmit.emit(e);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('submit', ['$event'])
  submitEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.submits.next(event);
  }

}
