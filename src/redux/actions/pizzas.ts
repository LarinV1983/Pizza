
interface PizzaType {
 id: number;
  name: string;
  imageUrl: string;
  price: number;
  size: number[];
  type: number[];
  category: number;
  rating: number;
}

export const setLoaded = (payload: PizzaType) => ({
  type: 'SET_LOADED',
  payload,
});

export const setPizzas = (items: any[]) => ({
  type: 'SET_PIZZAS',
  payload: items,
});