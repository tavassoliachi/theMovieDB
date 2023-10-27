import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import type {} from 'redux-thunk/extend-redux';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
