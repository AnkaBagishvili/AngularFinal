import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrl: './rating-stars.component.scss',
})
export class RatingStarsComponent {
  initialStars = 5;
  @Input() rating: number = 0;
  starList = Array.from({ length: this.initialStars });
}
