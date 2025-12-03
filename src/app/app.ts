import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Roles } from './components/roles/roles';
import { Master } from './components/master/master';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Master],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular_Practice_Project');
}
