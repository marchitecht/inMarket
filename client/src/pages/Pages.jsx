import React, { } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import LoginBox from "../components/LoginBox/LoginBox";
import Vegetables from "../components/SubCategories/Vegetables";
import DetailedOrder from "../components/vendorDashboard/modules/DetailedOrder/index";
import Orders from "../components/vendorDashboard/modules/Orders/index";
import Menu from "../components/vendorDashboard/modules/VendorMenu/index";
import CreateMenuItem from "../components/vendorDashboard/modules/CreateMenuItem/index";
import OrderHistory from "../components/vendorDashboard/modules/OrderHistory/index";
import Settings from '../components/vendorDashboard/modules/Settings/index';
import TestPage from "../components/ProductsExemple/Test.jsx";
import VendorDashboard from "../components/VendorDashboard";
import Header from "../components/Header";
import VendorPages from './VendorPages'

function Pages() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <React.Fragment><Header></Header></React.Fragment> */}
        <Route path="/"  >
          <Route index element={<Category></Category>}></Route>
          <Route path="/categories" element={<Category />}>
          <Route index element={<Category></Category>}></Route>
            <Route path="categories/:categoryName" element={<Vegetables />}>
              <Route path=":subCategoryId" element={<Vegetables />}> </Route>
            </Route>

          </Route>
        </Route>
        <Route path="/auth/signin" element={<LoginBox />} />
        <Route path="/auth/signup" element={<LoginBox />} />

        <Route path="/categories/:categoryName/:subCategoryId/products" element={<TestPage></TestPage>}></Route>
        <Route path="/vendor" element={<VendorDashboard/>}/>
          



  
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
{/* 
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} /> */}
{/* <Route path="/test" element={<ProductsExemple />} /> */ }
