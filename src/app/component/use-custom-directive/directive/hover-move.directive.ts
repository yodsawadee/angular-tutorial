import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverMove]'
})
export class HoverMoveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.moveElement(-10);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.moveElement(0);
  }

  private moveElement(offset: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', `translateY(${offset}px)`);
    // this.renderer.setStyle(this.elementRef.nativeElement, 'transition', `transform 0.3s ease`);
    this.elementRef.nativeElement.style.transition = 'transform 0.3s ease';
    // this.elementRef.nativeElement.style.backgroundColor = "#C8E6C9"; // light green
  }

}
