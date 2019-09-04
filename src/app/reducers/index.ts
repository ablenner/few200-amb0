import * as fromCounter from './counter.reducer';

export interface AppState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.reducer
};

// selector functions
export const selectCurrentCount = (state: AppState) => state.counter.current;
