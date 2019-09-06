import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/booklist.actions';



export interface BookListEntity {
  id: string;
  title: string;
  author: string;
  format: string;
}

export interface BookListState extends EntityState<BookListEntity> {

}

export const adapter = createEntityAdapter<BookListEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.bookAdded, (state, action) => adapter.addOne(action.entity, state)),
  on(actions.booksLoaded, (state, action) => adapter.addAll(action.books, state)),
  on(actions.bookAddedSuccess, (state, action) => {
    const tempState = adapter.removeOne(action.oldid, state);
    return adapter.addOne(action.newEntity, tempState);
  })
);

export function reducer(state: BookListState = initialState, action: Action) {
  return reducerFunction(state, action);
}
