import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-1',  // => nom de l'element HTML
  styleUrl: './counter-1.css',
  templateUrl: './counter-1.html',
})
export class Counter1 {
  count: number = 0

  incr() {
    this.count++
  }
}
