import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent implements OnInit, OnDestroy {
  count: number = 0;
  storeSubscription: any;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.storeSubscription = this.store.select('counter').subscribe((data) => {
      console.log(data);
      this.count = data.counter;
    });
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}
