
interface PizzaTypeObj {
 id: number;
  name: string;
  imageUrl: string;
  price: number;
  size: number[];
  type: number[];
  category: number;
  rating: number;
}

export const addPizzaToCart = (pizzaObj: PizzaTypeObj ) => ({
	type: 'ADD_PIZZA_CART',
	payload: pizzaObj,
});

export const clearCart = () => ({
	type: 'CLEAR_CART',
});

export const removeCartItem = (id: number) => ({
	type: 'REMOVE_CART_ITEM',
		payload: id,

});