import { combineReducers } from 'redux';

import appReducer from './app-reducer';
import collectionsReducer from './collections-reducer';

export default combineReducers({
  app: appReducer,
  collections: collectionsReducer
});
