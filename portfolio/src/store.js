import state from './state';
import {allReducers} from './reducers';
import { createStore } from 'redux';

const store = createStore(allReducers,state, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
