import { combineReducers } from 'redux';
import { tabsReducer, currentTabReducer } from '../pages/tabs/tabs.reducer';
import { itemsReducer, itemsFilterReducer, currentItemReducer } from '../pages/items/items.reducer';
import { orderItemsReducer, orderBadgeReducer } from '../pages/order/order.reducer';

export class IAppState {
  tabs?: Array<any>
  items?: Array<any>
  orderItems?: Array<any>
  itemsFilter?: number
  currentTabName?: any
  currentItem?: any
  orderBadge?: number
}

export const rootReducer = combineReducers<IAppState>({
  tabs: tabsReducer,
  items: itemsReducer,
  itemsFilter: itemsFilterReducer,
  currentTabName: currentTabReducer,
  currentItem: currentItemReducer,
  orderItems: orderItemsReducer,
  orderBadge: orderBadgeReducer
});
