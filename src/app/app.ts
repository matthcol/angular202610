import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigate } from './component/navigate/navigate';


@Component({
  imports: [RouterOutlet, Navigate],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cinema');
}
