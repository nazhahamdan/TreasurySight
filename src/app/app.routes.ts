//Définition des routes de ton application (ex: login, dashboard)

import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';

export const routes: Routes = [
  {path:'acceuil',component:Accueil},
];
