export const featureName = 'bookCollectionFeature';
import * as fromBooklist from './booklist.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export interface BookCollectionState {
  list: fromBooklist.BookListState;
}


export const reducers = {
  list: fromBooklist.reducer
};

// Selectors: (first 2 steps tend to be the same in different features)
// 1. Feature Selector
const selectFeature = createFeatureSelector<BookCollectionState>(featureName);

// 2. Selector per branch of the feature state
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. (optional) helpers
const { selectAll: selectAllListEntities } = fromBooklist.adapter.getSelectors(selectListBranch);

// 4. What the components need.
export const selectBookListItems = createSelector(selectAllListEntities, e => e as models.BooklistListItem[]);
