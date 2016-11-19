import { combineReducers } from 'redux';
import { tabsReducer } from '../pages/tabs/tabs.reducer';
import { itemsReducer, itemsFilterReducer } from '../pages/home/items.reducer';

export class IAppState {
  tabs?: Array<any>
  items?: Array<any>
  itemsFilter?: number
}

export const rootReducer = combineReducers<IAppState>({
  tabs: tabsReducer,
  items: itemsReducer,
  itemsFilter: itemsFilterReducer
});
