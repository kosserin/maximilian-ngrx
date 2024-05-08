import { Action, createAction, props } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export const increment = createAction(
  INCREMENT,
  props<{ value: number }>()
);

export const decrement = createAction(DECREMENT);

export class IncrementAction implements Action {
  readonly type = INCREMENT;

  constructor(public value: number) {}
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
}

export type CounterActions = IncrementAction | DecrementAction;
