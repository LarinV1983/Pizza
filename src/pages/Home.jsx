import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';

 function Home({items}) {

	return (
		      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories 
            items= {[
              'Мясные',
              'Вегетарианская',
              'Гриль',
              'Острые',
              'Закрытые',
              ]}>
              </Categories>
              <Sort 
              items={[
                'популярности',
                'цене',
                'алфавиту']}>
              </Sort>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
          {
            items.map(obj => 
              <PizzaBlock  
              key={obj.id}
              name={obj.name}
              imageUrl={obj.imageUrl}
              {...obj}
              >
              </PizzaBlock>)
          }
        </div>
      </div>
    </div>
	);
}

export default Home;