import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';

import {Routes, Route, Outlet, Link} from "react-router-dom";

function App() {
  return (
  <div className="wrapper">
  <Header></Header>
      <div className="content">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
      </Routes>
        </div>
      </div>
  );
}

export default App;
