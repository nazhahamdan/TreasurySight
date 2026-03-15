import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Accueil,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('treasurySight');
}
