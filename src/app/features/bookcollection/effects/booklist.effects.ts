import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import { BookListEntity } from '../reducers/booklist.reducer';
import * as appActions from '../../../actions/app.actions';
import * as booklistActions from '../actions/booklist.actions';


@Injectable()
export class BookListEffects {
  readonly url = 'http://localhost:3000/books'; // this should be put in an environment.

  // on app_start go get books from the api and return action
  loadBookOnAppStart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(appActions.applicationStarted),
      switchMap(() => this.client.get<BookListEntity[]>(this.url)
        .pipe(
          map(x => booklistActions.booksLoaded({ books: x }))
        )
      )
    ), { dispatch: true }
  );

  // when they add a show, post it to the api and return an action
  saveBookToServer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(booklistActions.bookAdded),
      map(a => a.entity),
      switchMap(a => this.client.post<BookListEntity>(this.url, { title: a.title })
        .pipe(
          map(result => booklistActions.bookAddedSuccess({ oldid: a.id, newEntity: result }))
        )
      )
    ), { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
