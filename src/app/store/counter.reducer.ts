import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (_state, action) => action.value)
);

// old way
// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }

//   if (action.type === DECREMENT) {
//     return state - 1;
//   }

//   return state;
// }
