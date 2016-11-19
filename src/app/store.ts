import { combineReducers } from 'redux';
import { tabsReducer, currentTabReducer } from '../pages/tabs/tabs.reducer';
import { itemsReducer, itemsFilterReducer } from '../pages/home/items.reducer';

export class IAppState {
  tabs?: Array<any>
  items?: Array<any>
  itemsFilter?: number
  currentTabName?: any
}

export const rootReducer = combineReducers<IAppState>({
  tabs: tabsReducer,
  items: itemsReducer,
  itemsFilter: itemsFilterReducer,
  currentTabName: currentTabReducer
});
