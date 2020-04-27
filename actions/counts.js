import { COUNTER_CHANGE } from '../constants';
import { put, takeEvery } from 'redux-saga/effects';

export function changeCount(count) {
	return {
		type: COUNTER_CHANGE,
		payload: count
	}
}

export const addNewCounter = name => dispatch =>  {
	const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

	return dispatch({
		type: 'add-new-counter',
		payload: { id, name, count: 0 },
	});
};

export const setNewCounterAdding = isNewCounterAdding => dispatch => {
	return dispatch({
		type: 'set-new-counter-adding',
		payload: { isNewCounterAdding }
	});
};

export const removeCounter = counterId => dispatch => {
	return dispatch({
		type: 'remove-counter',
		payload: { counterId }
	});
};

export const decreaseCounter = counter => {
	return {
		type: 'decrease-counter-request',
		payload: { ...counter, count: counter.count - 1 }
	};
};

export const increaseCounter = counter => {
	return {
		type: 'increase-counter-request',
		payload: { ...counter, count: counter.count + 1 }
	};
};

export const setActiveCounter = counterId => dispatch => {
	return dispatch({
		type: 'set-active-counter',
		payload: counterId,
	});
};

export const increaseCounterSaga = function*({ payload }) {
	yield put({
		type: 'change-counter',
		payload,
	});
};

export const decreaseCounterSaga = function*({ payload }) {
	yield put({
		type: 'change-counter',
		payload,
	});
};

export const saga = function*() {
	yield takeEvery('increase-counter-request', increaseCounterSaga);
	yield takeEvery('decrease-counter-request', decreaseCounterSaga);
};
