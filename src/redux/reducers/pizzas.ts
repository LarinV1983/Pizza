import { AnyAction } from 'redux';

interface PizzasState {
	items: any[];
	isLoaded: boolean; 
}

const initialStore: PizzasState = {
	items: [],
	isLoaded: false, 
};

function pizzas (state = initialStore, action: AnyAction) {
	if (action.type === 'SET_PIZZAS') {
		return {
			...state,
			items: action.payload,
			isLoaded: true,
		};
	}
	if (action.type === 'SET_LOADED') {
		return {
			...state,
			isLoaded: action.payload,
		};

	}
		return state;
};

export default pizzas;

