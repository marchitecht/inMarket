import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Category from '../components/Category';

function Pages() {
  const location = useLocation()
  console.log(location);
  return (
    <Routes location={location} key={location.pathname}>
      <Route path='/category' element={<Category/>}/>

    </Routes>
  )
}

export default Pages
