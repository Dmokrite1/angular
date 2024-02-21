import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})

export class ColorDirectiveDirective implements OnInit {
  @Input() color: string = 'purple';

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = this.color
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = 'red'
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'purple'
  }
}
