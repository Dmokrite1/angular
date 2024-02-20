import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})

export class HighlightDirective {
  @Input() highlightColor = 'yellow'

  constructor(private elementRef: ElementRef<HTMLDivElement>) { 
    this.elementRef.nativeElement.style.backgroundColor= "";
    this.elementRef.nativeElement.style.width= "fit-content";
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor= this.highlightColor;
    this.elementRef.nativeElement.style.cursor= 'pointer';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor= '';
  }
}
