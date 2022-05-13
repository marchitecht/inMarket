import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Category from "../components/Category";
import LoginBox from "../components/LoginBox/LoginBox";
import Vegetables from "../components/SubCategories/Vegetables";
import Fruits from "../components/SubCategories/Fruits";
import Bread from "../components/SubCategories/Bread";
import Berries from "../components/SubCategories/Berries";
import TestPage from "../components/ProductsExemple/Test";
// import Chat from "../components/Chat/Chat";
import WebSock from "../components/WebSock/WebSock";

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
      <Route path="/allproducts" element={<TestPage />} />
      <Route path="/chat" element={<WebSock/>} />
    </Routes>
  )
}
export default Pages
