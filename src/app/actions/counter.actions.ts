import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[app counter] countIncremented'
);

export const decrement = createAction(
  '[app counter] countDecremented'
);

export const reset = createAction(
  '[app counter] reset'
);

export const setCountBy = createAction(
  '[app counter] count by set',
  props<CountByProps>()
);

interface CountByProps {
  by: number;
}
