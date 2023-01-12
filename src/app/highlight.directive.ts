import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

  @Input('highlight')
  price: number = 0;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    if(this.price > 300)
      this.element.nativeElement.style.backgroundColor = 'yellow'
  }
}
