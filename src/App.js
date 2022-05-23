import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';


import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
  <div className="wrapper">
  <Header></Header>
      <div className="content">
      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="cart" element={<Cart/>} />

        <Route path="login" element={<Login/>} />

        <Route path="register" element={<Register/>} />

      </Routes>
        </div>
      </div>
  );
}

export default App;
