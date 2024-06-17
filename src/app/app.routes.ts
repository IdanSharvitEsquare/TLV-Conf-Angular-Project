import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'cards',
    loadComponent: () =>
      import('./components/cards/cards.component').then(
        (m) => m.CardsComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
