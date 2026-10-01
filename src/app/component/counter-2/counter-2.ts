import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter-2',
  styleUrl: './counter-2.css',
  templateUrl: './counter-2.html',
})
export class Counter2 {
  count = signal<number>(0)

  incr() {
    this.count.update(v => v + 1) // calcul en fonction de la valeur precedente
  }

  reset() {
    this.count.set(0) // ecrase/fixe la valeur
  }
}
