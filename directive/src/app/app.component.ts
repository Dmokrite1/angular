import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './highlight.directive';
import { CoffeeDirectiveDirective } from './coffee-directive.directive';
import { ColorDirectiveDirective } from './color-directive.directive';
import { FreezePipe } from './freeze.pipe';
import { SummaryPipe } from './summary.pipe';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule, HighlightDirective, CoffeeDirectiveDirective, ColorDirectiveDirective, FreezePipe, SummaryPipe]
})
export class AppComponent {
  title = 'directive';
  color: 'blue' | 'red' = 'blue'
  sounds = ["Kashmir", "Spill mit mier", "Du hast"]
}
