import Pages from "../src/pages/Pages";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Layout, Image } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideMenu from "./components/vendorDashboard/sideItems";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/reducers/authReducer";
import AppRoutes from "./components/AppRoutes/index";


const { Sider, Content, Footer } = Layout;

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(checkAuth());
    }
  }, []);
  return (
    <div className="App">
      <Layout>
        {location.pathname.includes("vendor") ? (
          <Sider style={{ height: "100vh", backgroundColor: "white" }}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/862/862819.png"
              preview={false}
            />
            <SideMenu />
          </Sider>
        ) : (
          <Nav>
            <Logo
              src="https://cdn-icons-png.flaticon.com/512/862/862819.png"
              to={"/"}
            >
              inMarket
            </Logo>
            <Container>
              <Link to="/signin">Покупатель</Link>
              <Link to="/vendor/signin">Продавец</Link>
            </Container>
          </Nav>
        )}
        <Layout>
          {location.pathname.includes("vendor") ? (
            <Content style={{ background: "white" }}>
              <AppRoutes />
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
  height: 90px;
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

export default App;
