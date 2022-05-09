import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "../components/Category";
import LoginBox from "../components/LoginBox/LoginBox";
import Vegetables from "../components/Vegetables";
import Fruits from "../components/Fruits";
import Bread from "../components/Bread";
import Berries from "../components/Berries";

 function Pages() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Category />} />
      <Route path="/signin" element={<LoginBox />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} />
    </Routes>
  )
}
export default Pages
