import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { BrokenComponent } from '../broken/broken.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, BrokenComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {}
