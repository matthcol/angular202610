import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter1 } from './component/counter-1/counter-1';
import { Counter2 } from './component/counter-2/counter-2';


@Component({
  imports: [RouterOutlet, Counter1, Counter2],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cinema');
}
