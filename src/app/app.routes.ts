import { Routes } from '@angular/router';
import { flickerResolver } from './components/flicker/flicker.resolver';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./components/books/books.component').then(
        (m) => m.BooksComponent
      ),
  },
  {
    path: 'cards',
    loadComponent: () =>
      import('./components/cards/cards.component').then(
        (m) => m.CardsComponent
      ),
  },
  {
    path: 'flicker',
    loadComponent: () =>
      import('./components/flicker/flicker.component').then(
        (m) => m.FlickerComponent
      ),
    resolve: { flickerResolver },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
