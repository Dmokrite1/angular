import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {

@Input() titleZippy = "Et Régis-Robert c'est mon prénom !";
@Input() isHidden = false;

get buttonText() {
  if (this.isHidden) {
    return 'Afficher';
  }
  return 'Cacher';
}

toggleContentVisibility() {
  this.isHidden = !this.isHidden;
}}
