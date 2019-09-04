import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import { tap } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }// default is true, sends the output of this to the reducer. can cause infinite loops.
  );
  constructor(private actions$: Actions) { }
}
