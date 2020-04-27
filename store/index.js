import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import createSagaMiddleWare from 'redux-saga';
import { saga } from '../actions/counts';

const sagaMiddleware = createSagaMiddleWare();
const middleWares = [sagaMiddleware, thunk, logger];

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleWares),
	),
);

sagaMiddleware.run(saga);

export default store;
