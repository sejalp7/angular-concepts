import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHostListenBind]'
})
export class HostListenBindDirective {

  @HostBinding('style.background-color') paintRed: string = 'red';
  buttonClicked = false;
  constructor() { }

  @HostListener('click')
  onButtonClick(): void {
    this.buttonClicked = !this.buttonClicked;
    if(this.buttonClicked) {
        this.paintRed = 'green';
    } else {
      this.paintRed = 'red';
    }
  }

}
