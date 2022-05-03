import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import { Routes, Route} from "react-router-dom";

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
    .then((respons) => respons.json())
    .then((json) => {
      setPizzas(json.pizzas);
    });
  }, []);

  return (
  <div className="wrapper">
  <Header></Header>
      <div className="content">
      <Routes>
        <Route path="/" 
        element={<Home items={pizzas} />} />
        <Route path="cart" 
        element={<Cart />} />
      </Routes>

       
        </div>
      </div>
  );
}

export default App;
