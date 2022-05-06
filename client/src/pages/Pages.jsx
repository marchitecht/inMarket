import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Berries from '../components/Berries';
import Bread from '../components/Bread';
import Category from '../components/Category';
import Fruits from '../components/Fruits';
import Vegetables from '../components/Vegetables';

function Pages() {
  const location = useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Category/>}/>
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} />
    </Routes>
  )
}

export default Pages
