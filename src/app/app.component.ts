import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SuperComponentsComponent } from './super-components/super-components.component';
import { ZippyComponent } from './zippy/zippy.component';
import { BananaInABoxComponent } from './banana-in-abox/banana-in-abox.component';
import { TrucComponent } from './truc/truc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuperComponentsComponent, ZippyComponent, BananaInABoxComponent, TrucComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';

  alertTruc(value: string) {
    alert(`le mot entrée est : ${value}`);
  }

  consoleTruc(value: string) {
    console.log(`le mot entrée est : ${value}`)
  }
}