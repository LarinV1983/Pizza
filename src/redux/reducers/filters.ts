import { AnyAction } from 'redux';

interface FilterState {
	category: null;
	sortBy: string;
};

const initialStore: FilterState = {
	category: null,
	sortBy: 'popular',
};

function filters (state = initialStore, action: AnyAction) {
	if (action.type === 'SET_SORT_BY') {
		return {
			...state,
			sortBy: action.payload,
		};
	}

if (action.type === 'SET_CATEGORY') {
		return {
			...state,
			category: action.payload,
		};
	}
	return state;	
};

export default filters;