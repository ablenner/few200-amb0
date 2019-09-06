import { createAction, props } from '@ngrx/store';
import { BookListEntity } from '../reducers/booklist.reducer';

let currentFakeId = 1;

export const bookAdded = createAction(
  '[bookcollection] booklist bookadded',
  ({ title, author, format }: { title: string, author: string, format: string }) => ({
    entity: {
      id: currentFakeId++ + 'T',
      title,
      author,
      format
    } as BookListEntity
  })
);


export const booksLoaded = createAction(
  '[bookcollection] booklist books loaded',
  props<{ books: BookListEntity[] }>()
);

export const bookAddedSuccess = createAction(
  '[bookcollection] booklist book added successfully',
  props<{ oldid: string, newEntity: BookListEntity }>()
);
