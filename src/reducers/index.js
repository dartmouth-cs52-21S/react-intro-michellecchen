// With ES6 if you have a directory with multiple files
// and an index.js file you can import it by the
// directory name: import ./reducers.

// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import CountReducer from './count-reducer';

// Root reducer (top level) uses combineReducers
// to combine multiple reducers together into our redux state.
const rootReducer = combineReducers({
    count: CountReducer,
});

export default rootReducer;
