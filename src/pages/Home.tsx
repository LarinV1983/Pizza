import React from 'react';
import {useAppSelector, useAppDispatch} from '../redux/store';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import {setPizzas, setLoaded} from '../redux/actions/pizzas';
import axios from 'axios';
import {setCategory, setSortBy} from '../redux/actions/filters';
import {addPizzaToCart} from '../redux/actions/cart';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

type SortList = {
  name: string;
  type: string;
  order: string;
}

const sortItems: SortList[] = [
                {name: 'популярности', type: 'popular', order: 'desc'},
                {name: 'цене', type: 'price', order: 'desc'},
                {name: 'алфавит', type: 'name', order: 'asc'},
               ];              

 const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(({pizzas}) => pizzas.items);
  const cartItems = useAppSelector(({ cart }) => cart.items);
  const isLoaded = useAppSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useAppSelector(({filters}) => filters);
  
  React.useEffect(() => {
    dispatch (setLoaded(false));
    axios.get(
      `/pizzas?${
      category !==null ? `category=${category}` : ''
      }&_sort=${sortBy}&_order=desc`,
      )
    .then(({data}) => {
    dispatch(setPizzas(data));
    });
  }, [sortBy, category]);

  const onSelectCategory = React.useCallback((index: number) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type: string) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj: any) => {
    dispatch({
      type: 'ADD_PIZZA_CART',
      payload: obj,
    });
  };

	return (
		      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories
            activeCategory={category} 
            onClickCategory={onSelectCategory}
            items= {categoryNames}>
              </Categories>
              <Sort
              activeSortType = {sortBy} 
              items={sortItems}
              onClickSortType={onSelectSortType}
              >
              </Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((obj: any) => (
              <PizzaBlock
              onClickAddPizza = {handleAddPizzaToCart}
              key={obj.id} 
              name={obj.name} 
              imageUrl={obj.imageUrl} 
              isLoaded={true}
              addedCount={cartItems[obj.id] && cartItems[obj.id].items.length} 
              {...obj}
              />))}
              </div>
            </div>
          </div>
  );
};

export default Home;