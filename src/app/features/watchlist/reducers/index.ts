
export const featureName = 'watchListFeature';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as models from '../models';

export interface WatchListState {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};

// Selectors: (first 2 steps tend to be the same in different features)
// 1. Feature Selector
const selectFeature = createFeatureSelector<WatchListState>(featureName);

// 2. Selector per branch of the feature state
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. (optional) helpers
const { selectAll: selectAllListEntities } = fromList.adapter.getSelectors(selectListBranch);

// 4. What the components need.
export const selectWatchListItems = createSelector(selectAllListEntities, e => e as models.WatchlistListItem[]);
