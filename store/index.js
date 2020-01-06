import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middleWares = [thunk];

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleWares),
	),
);

export default store;
