import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.fontWeight = 'bold'
  }

}
