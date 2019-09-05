import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/counter.actions';
import * as appActions from '../actions/app.actions';
import { tap, map, filter } from 'rxjs/operators';

@Injectable()
export class CounterEffects {

  readCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      // read the value from localstorage
      map(() => localStorage.getItem('by')), // map makes changes. tap let's you listen in but you can't make changes.

      // if it is null do nothing
      filter(val => val !== null),

      // if not, convert to a number
      map(val => parseInt(val, 10)),

      // dispatch a countBySet(x)
      map(by => actions.setCountBy({ by }))
    )
  );

  writeCountByForReset$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.reset),
      tap(() => localStorage.setItem('by', '1'))
    ), { dispatch: false });

  writeCountBy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.setCountBy),
      tap(a => localStorage.setItem('by', a.by.toString()))
    ), { dispatch: false }// default is true, sends the output of this to the reducer. can cause infinite loops.
  );
  constructor(private actions$: Actions) { }
}
