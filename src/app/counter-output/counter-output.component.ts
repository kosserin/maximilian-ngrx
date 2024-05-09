import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  imports: [AsyncPipe],
  standalone: true,
})
export class CounterOutputComponent {
  public count$: Observable<number>;
  public doubleCount$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.count$ = this.store.select(selectCount);
    this.doubleCount$ = this.store.select(selectDoubleCount);
    // this.count$ = this.store.select('counter');
  }
}
