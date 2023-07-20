import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/playList';
import PrivateRoute from './components/privateRoute';
import CheckOut from './components/Checkout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckOut/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
