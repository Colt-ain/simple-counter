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
	activeCounterId: null,
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

		case 'change-counter': {
			return {
				...state,
				counterList: state.counterList.map(currentCounter => {
					if (currentCounter.id === payload.id) {
						return payload;
					}

					return currentCounter;
				}),
			};
		}

		case 'set-active-counter': {

			return {
				...state,
				activeCounterId: payload || null,
			};
		}

		case 'increase-counter': {
			return {
				...state,
				activeCounterId: payload || null,
			};
		}

		default:
			return initialState;
	}
};

export default counters;
