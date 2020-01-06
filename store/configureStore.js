import { createStore, combineReducers } from 'redux';
import counters from '../reducers/countReducer';

const rootReducer = combineReducers(
	{ count: counters }
);

const configureStore = () => {
	return createStore(rootReducer);
};

export default configureStore;
