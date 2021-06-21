import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import coinsReducer from '../reducers/coinsReducer';
import moreCoinsReducer from '../reducers/moreCoinsReducer';
import trendingCoinsReducer from '../reducers/trendingCoinsReducer';
import usersReducer from '../reducers/usersReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    coinsReducer,
    moreCoinsReducer,
    trendingCoinsReducer,
    usersReducer,
  }),
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
