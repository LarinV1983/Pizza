import { AnyAction } from 'redux';

interface CartState {
	totalPrice: number;
	totalCount: number;
	items: any[];
};

const initialStore: CartState = {
	items: [],
	totalPrice: 0,
	totalCount: 0,
};

const getTotalPrice = (arr:any[]) => arr.reduce((sum: number, obj: any) => obj.price + sum, 0);

function cart (state = initialStore, action: AnyAction) {
	if (action.type === 'ADD_PIZZA_CART') {
		const currentPizzaItems = !state.items[action.payload.id]
			? [action.payload]
			: [...state.items[action.payload.id].items, action.payload]

		const newItems = {
				...state.items,
				[action.payload.id]: {
					items: currentPizzaItems,
					totalPrice: getTotalPrice(currentPizzaItems),
				},
			};

			const items = Object.values(newItems).map((obj) => obj.items);
			const allPizzas = [].concat.apply([], items);
			const totalPrice = getTotalPrice(allPizzas);

		return {
			...state,
			items: newItems,
			totalCount: allPizzas.length,
			totalPrice,
		};
	}

	if (action.type === 'CLEAR_CART') {
		return {
			totalPrice: 0,
			totalCount: 0,
			items: [],
		};
	}

if (action.type ==='REMOVE_CART_ITEM') {
	const newItems = {
		...state.items,
	};
	const currentTotalPrice = newItems[action.payload].totalPrice;
	const currentTotalCount = newItems[action.payload].items.length;

	delete newItems[action.payload];
	return {
			...state,
			items: newItems,
			totalPrice: state.totalPrice - currentTotalPrice,
			totalCount: state.totalCount - currentTotalCount, 
		};
}

	if (action.type === 'SET_TOTAL_COUNT') {
		return {
			...state,
			totalCount: action.payload,
		};

	}
		return state;
};
			
export default cart;