import React, { } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import LoginBox from "../components/LoginBox/LoginBox";
import Categories from "../components/SubCategories/Vegetables";
import DetailedOrder from "../components/vendorDashboard/modules/DetailedOrder/index";
import Orders from "../components/vendorDashboard/modules/Orders/index";
import Menu from "../components/vendorDashboard/modules/VendorMenu/index";
import OrderHistory from "../components/vendorDashboard/modules/OrderHistory/index";
import Settings from '../components/vendorDashboard/modules/Settings/index';
import TestPage from "../components/ProductsExemple/Test.jsx";
import VendorDashboard from "../components/VendorDashboard";
import Header from "../components/Header";
import VendorPages from './VendorPages'
import CreateMenuItem from "../components/vendorDashboard/modules/CreateMenuItem/index";
import AppRoutes from '../components/AppRoutes'
import Vegetables from "../components/SubCategories/Vegetables";
import Fruits from "../components/SubCategories/Fruits";
import Bread from "../components/SubCategories/Bread";
import Berries from "../components/SubCategories/Berries";
// import Chat from "../components/Chat/Chat";
import WebSock from "../components/WebSock/WebSock";

 function Pages() {
  const location = useLocation();

function Pages() {
  return (
    <>
    <Header></Header>
      <Routes>
        {/* <React.Fragment><Header></Header></React.Fragment> */}
        <Route path="/" element={<Category/>}></Route>
        <Route path="/categories/:categoryName" element={<Categories />}></Route>
        <Route path="/categories/:categoryName/:subCategoryId" element={<TestPage />}> </Route>
        <Route path="/auth/signin" element={<LoginBox />} />
        <Route path="/auth/signup" element={<LoginBox />} />
        <Route path="/test" element={<CreateMenuItem/>}></Route>

        <Route path="/categories/:categoryName/:subCategoryId/product" element={<div>PRODUCT</div>}></Route>
        <Route path="/vendor" element={<VendorDashboard/>}>

                  <Route path="/vendor/orders" element={<Orders />} />
                  <Route path="/vendor/orders/:id" element={<DetailedOrder />} />
                  <Route path="/vendor/menu" element={<Menu />} />
                  <Route path="/vendor/menu/new" element={<CreateMenuItem />} />
                  <Route path="/vendor/history" element={<OrderHistory />} />
                  <Route path="/vendor/settings" element={<Settings />} />
        </Route>



        {/* <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/berries" element={<Berries />} /> */}
        <Route path="/allproducts" element={<TestPage />} />
        <Route path="/chat" element={<WebSock/>} />

        </Routes>
</>)
        {/* <Route path="/signin" element={<LoginBox />} />
  )
}
export default Pages
{/* 
      <Route path="/vegetables" element={<Vegetables />} />
      <Route path="/fruits" element={<Fruits />} />
      <Route path="/bread" element={<Bread />} />
      <Route path="/berries" element={<Berries />} /> */}
{/* <Route path="/test" element={<ProductsExemple />} /> */ }
