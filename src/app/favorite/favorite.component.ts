import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  standalone: true,
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent {
  @Input() isFavorite: boolean = false;
  @Output() favoriteClicked = new EventEmitter<void>();
  @Input() favoriteText: string = '';

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    this.favoriteClicked.emit();
  }
}
