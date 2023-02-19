import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  // @Input() set appCustomDirective(styles: Object) {
  @Input('appCustomDirective') set setStyle(styles: Object) {
  // @Input() set setStyle(styles: Object) {
    let entries = Object.entries(styles);
    console.log(entries)
    for (let entry of entries) {
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
    }
  }
  
}
