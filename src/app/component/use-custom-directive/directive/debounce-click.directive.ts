import { Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ElementRef} from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime } from 'rxjs/operators';

@Directive({
    selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
    @Input() debounceTime = 500;
    @Output() debounceClick = new EventEmitter();
    
    private clicks = new Subject();
    private subscription: Subscription;

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.subscription = this.clicks.pipe(
            debounceTime(this.debounceTime)
        ).subscribe(e => this.debounceClick.emit(e));
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    @HostListener('click', ['$event'])
    clickEvent(event:any) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
}