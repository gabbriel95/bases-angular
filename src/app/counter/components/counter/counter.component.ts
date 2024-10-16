import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="dicrementBy(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public counter: number = 10;

  public increaseBy(value: number = 1): void {
    this.counter += value;
  }

  public dicrementBy(value: number = 1): void {
    this.counter -= value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }
}
