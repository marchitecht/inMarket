import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import LoginBox from "../components/LoginBox/LoginBox";
import Vegetables from "../components/Vegetables";
import Fruits from "../components/Fruits";
import Bread from "../components/Bread";
import Berries from "../components/Berries";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Category />} >
          <Route path="/categories" element={<Category />}>
          
          </Route>
        </Route>
        <Route path="/categories/:categoryName" element={<Vegetables />}></Route>
        <Route path="/categories/:categoryName/:subCategoryId" element={<Vegetables />}></Route>

        {/* <Route path="/signin" element={<LoginBox />} />
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} /> */}
        {/* <Route path="/test" element={<ProductsExemple />} /> */}
      </Routes>
    </BrowserRouter>

  )
}
export default Pages
