import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }
}
