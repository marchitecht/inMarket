import Pages from "../src/pages/Pages";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DetailedOrder from "./components/vendorDashboard/modules/DetailedOrder/index";
import Orders from "./components/vendorDashboard/modules/Orders/index";
import { Layout, Image } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideMenu from "./components/vendorDashboard/sideItems";

const { Sider, Content, Footer } = Layout;

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="App">
      <Layout>
        {location.pathname.includes("vendor") ? (
          <Sider style={{ height: "100vh", backgroundColor: "white" }}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/862/862819.png"
              preview={false}
            />
            <SideMenu/>
          </Sider>
        ) : (
          <Nav>
            <Logo
              src="https://cdn-icons-png.flaticon.com/512/862/862819.png"
              to={"/"}
            >
              inMarket
            </Logo>
          </Nav>
        )}
        <Layout>
          {location.pathname.includes("vendor") ? (
            <Content style={{ background: "black" }}>
              <Routes>
                <Route path="/vendor/orders" element={<Orders />} />
                <Route path="/vendor/orders/:id" element={<DetailedOrder />} />
              </Routes>
            </Content>
          ) : (
            <Pages />
          )}
        <Footer style={{ textAlign: "center" }}>
          inMarket FoodTech Startup 2022
        </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
`;
const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
`;
export default App;
