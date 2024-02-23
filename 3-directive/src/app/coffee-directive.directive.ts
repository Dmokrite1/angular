/*
* Très important ne pas oublier de bien choisir le décorateur en fonction des besoins: Component, Directive, etc.. à prendre en compte à la création ng g "c" leNomDuDossier pour Components; ng g "d" leNomDuFichier pour Directive
*/

import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCoffee]',
  standalone: true
})
export class CoffeeDirectiveDirective implements OnInit{
  isCoffeeVisible: boolean = false

  coffeeAscii = `
  <pre>
    (  )   (   )  )
     ) (   )  (  (
     ( )  (    ) )
     _____________
    <_____________> ___
    |             |/ _ \\
    |               | | |
    |               |_| |
 ___|             |\\___/
/    \\___________/    \\
\\_____________________/
</pre>
`;
originalContent: string = '';

constructor(private el: ElementRef<HTMLElement>) { }
  ngOnInit(): void {
    this.originalContent = this.el.nativeElement.innerHTML;
  }

  @HostListener('click')
  onClick() {
    this.isCoffeeVisible = !this.isCoffeeVisible;
    if (this.isCoffeeVisible) {
      this.el.nativeElement.innerHTML = this.coffeeAscii;
    } else {
      this.el.nativeElement.innerHTML = this.originalContent;
    }
  }
}
