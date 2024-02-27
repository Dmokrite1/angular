import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-lizard',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './lizard.component.html',
  styleUrl: './lizard.component.css'
})
export class LizardComponent {

}
