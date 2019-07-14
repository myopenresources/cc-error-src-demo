import { Directive, Input, ElementRef, AfterViewInit } from '@angular/core';


@Directive({
  selector: '[ccErrorSrc]'
})
export class ErrorSrcDirective implements AfterViewInit {
  @Input() errSrc = '';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.addEventListener('error', (e: any) => {
      if (this.errSrc !== '') {
        this.elementRef.nativeElement.src = this.errSrc;
      }
    });
  }




}
