import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-other',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {

}
