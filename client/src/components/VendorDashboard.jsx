import React from 'react'
import styled from "styled-components";
import { Layout, Image } from "antd";
import SideMenu from "./vendorDashboard/sideItems";
import { Link } from 'react-router-dom';
import { Route, Routes} from "react-router-dom";
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
import Header from "../components/Header";

function VendorDashboard() {
  const { Sider, Content, Footer } = Layout;
  return (
    <Layout>

      <Sider style={{ height: "100vh", backgroundColor: "white" }}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/862/862819.png"
          preview={false}
        />
        <SideMenu />
      </Sider>
    <Layout>
        <Content style={{ background: "white" }}>
    <Routes>
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<DetailedOrder />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/new" element={<CreateMenuItem />} />
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>

        </Content>
    </Layout>
  </Layout> 

  )
}

const Logo = styled(Link)`
  text-decoration: none;
  padding-left: 20px;
  font-size: 2rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  color: white;
  svg {
    font-size: 4rem;
  }
`;
const Nav = styled.div`
  background: rgb(166, 8, 255);
  background: linear-gradient(
    90deg,
    rgba(166, 8, 255, 1) 21%,
    rgba(223, 57, 244, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 7vh;
  z-index: 10;
  opacity: 0.8;
  transition: opacity 0.3s;
  :hover {
    opacity: 1;
  }
`;

const Container = styled.div`
  padding-top: 35px;
  font-size: 2rem;
  display: flex;
  right: 20px;
  padding-right: 20px;
  padding-bottom: 35px;
`;

export default VendorDashboard
