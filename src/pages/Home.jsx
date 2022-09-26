import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
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

 function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({pizzas}) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({filters}) => filters);
  
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

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const handleAddPizzaToCart = (obj) => {
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
            {items.map((obj) => (
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
}

export default Home;