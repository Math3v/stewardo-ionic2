import { combineReducers } from 'redux';
import { tabsReducer, currentTabReducer } from '../pages/tabs/tabs.reducer';
import { itemsReducer, itemsFilterReducer, currentItemReducer } from '../pages/items/items.reducer';

export class IAppState {
  tabs?: Array<any>
  items?: Array<any>
  itemsFilter?: number
  currentTabName?: any
  currentItem?: any
}

export const rootReducer = combineReducers<IAppState>({
  tabs: tabsReducer,
  items: itemsReducer,
  itemsFilter: itemsFilterReducer,
  currentTabName: currentTabReducer,
  currentItem: currentItemReducer
});
