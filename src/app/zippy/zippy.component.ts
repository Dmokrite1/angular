import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy',
  standalone: true,
  imports: [],
  templateUrl: './zippy.component.html',
  styleUrl: './zippy.component.css'
})
export class ZippyComponent {
name = 'Zippy';
isHidden = false;

toggleHidden() {
  this.isHidden = !this.isHidden;
}}
