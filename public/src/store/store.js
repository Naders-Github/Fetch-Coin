import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from '../reducers/coinsReducer';
import detailsReducer from '../reducers/detailsReducer';
import watchReducer from '../reducers/watchReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    coinsReducer,
    detailsReducer,
    watchReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
