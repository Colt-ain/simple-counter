import { COUNTER_CHANGE } from '../constants';

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
