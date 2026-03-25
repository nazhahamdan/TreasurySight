//Définition des routes de ton application (ex: login, dashboard)

import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';

export const routes: Routes = [
  {path:'',component:Accueil},
  {path:'login',component:Login},
  {path:'register',component:Register}
];
