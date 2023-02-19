import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostBindingDirective]'
})
export class HostBindingDirectiveDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.background') background: string = 'transparent';

  @HostListener('mouseenter') onmouseover() {
    this.background = 'yellow';
  }

  @HostListener('mouseleave') onmouseout() {
    this.background = 'green';
  }

}
