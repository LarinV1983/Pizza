import React from 'react';

type CategoriesProps = {
  activeCategory: number;
  items: any[];
  onClickCategory: (index: number | null) => void;
}

const Categories: React.FC<CategoriesProps> = React.memo(function Categories({ activeCategory, items, onClickCategory}) {
 
   return (
         <div className="categories">
        <ul>
           <li className={activeCategory === null ? "active" : ''}
                     onClick={() => onClickCategory(null)}>Все
                     </li>
                      {items &&
                  items.map((name: string, index: number) => (
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