import { COUNTER_CHANGE } from '../constants';

const initialState = {
	counterList: [
		{
			id: 'ojnvpirdtb',
			name: 'First Counter',
			count: 0,
		},
		{
			id: 'jtbntjyhth',
			name: 'Second Counter',
			count: 1,
		},
		{
			id: 'rtbgdrtgtg',
			name: 'Third Counter',
			count: 2,
		},
	],
	isNewCounterAdding: false,
};

const counters = (state = initialState, { type, payload}) => {
	switch(type) {
		case 'set-new-counter-adding': {
			return {
				...state,
				isNewCounterAdding: payload.isNewCounterAdding,
			};
		}

		case 'add-new-counter': {
			return {
				...state,
				counterList: [...state.counterList, payload],
				isNewCounterAdding: false,
			}
		}

		case 'remove-counter': {
			return {
				...state,
				counterList: state.counterList.filter(counter => counter.id !== payload.counterId),
			};
		}

		default:
			return initialState;
	}
};

export default counters;
