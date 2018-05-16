import { Component, OnInit } from '@angular/core';

import SharedThing from "src/shared/SharedThing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  max     = 1000;
  get current() {
    return SharedThing.value;
  }

  set current(value) {
    SharedThing.value = value;
  }

  /// Start the timer
  start() {
    const interval = {};//Observable.interval(100);

    /*interval
      .takeWhile(_ => !this.isFinished )
      .do(i => this.current += 0.1)
      .subscribe();*/
  }

  /// finish timer
  finish() {
    this.current = this.max;
  }

  /// reset timer
  reset() {
    this.current = 0;
  }

  /// Getters to prevent NaN errors

  get maxVal() {
    return isNaN(this.max) || this.max < 0.1 ? 0.1 : this.max;
  }

  get currentVal() {
    return isNaN(this.current) || this.current < 0 ? 0 : this.current;
  }

  get isFinished() {
    return this.currentVal >= this.maxVal;
  }
}
