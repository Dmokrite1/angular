import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }
}
