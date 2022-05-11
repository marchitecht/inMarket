import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import LoginBox from "../components/LoginBox/LoginBox";
import Vegetables from "../components/SubCategories/Vegetables";
import Fruits from "../components/SubCategories/Fruits";
import Bread from "../components/SubCategories/Bread";
import Berries from "../components/SubCategories/Berries";
import TestPage from "../components/ProductsExemple/Test";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} >
          <Route path="/categories" element={<Category />}/>
        </Route>
        <Route path="/auth/signin" element={<LoginBox />} />
        <Route path="/auth/signup" element={<LoginBox />} />
        <Route path="/categories/:categoryName" element={<Vegetables />}></Route>
        <Route path="/categories/:categoryName/:subCategoryId" element={<Vegetables />}></Route>
      </Routes>
    </BrowserRouter>

  )
}
export default Pages
 {/* 
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} /> */}
        {/* <Route path="/test" element={<ProductsExemple />} /> */}
