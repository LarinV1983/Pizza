import React from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory}) {
   // const [activeItem, setActiveItem] = React.useState(null);

   // const onSelectItem = (index) => {
   //    // setActiveItem(index);
   //    onClickItem(index);
   // };

   return (
         <div className="categories">
        <ul>
           <li className={activeCategory === null ? "active" : ''}
                     onClick={() => onClickCategory(null)}>Все
                     </li>
                      {items &&
                  items.map((name, index) => (
               <li 
               className={activeCategory === index ? "active" : ''}
               onClick={() => onClickCategory(index)} 
               key={`${name}_${index}`}>
               {name}
               </li>
           ))}
        </ul>
      </div>
   );
});

export default Categories;
