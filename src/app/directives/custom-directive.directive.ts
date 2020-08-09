import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    this.changeColor('pink');
  }

  changeColor(color: string): void {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', color);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
   this.changeColor('blue');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
   this.changeColor('pink');
  }

}
