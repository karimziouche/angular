import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Block } from './block/block';
import { UserProfile } from './user-profile/user-profile';

@Component({
  imports: [RouterOutlet, Block, UserProfile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Bienvenue sur le site de Karim !');
}
