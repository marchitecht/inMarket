import Pages from "../src/pages/Pages";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import DetailedOrder from "./components/vendorDashboard/modules/DetailedOrder/index";
import Orders from "./components/vendorDashboard/modules/Orders/index";
import { Layout, Image } from "antd";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SideMenu from "./components/vendorDashboard/sideItems";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/reducers/authReducer";

const { Sider, Content, Footer } = Layout;


function App() {
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);
  const user = useSelector(store => store.authReducer.user)
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(checkAuth())
    }
  }, [])
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
            <Container>
              <SignIn>Вход</SignIn>
              <SignUp>Регистрация</SignUp>
            </Container>
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
  padding-left:20px;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: white;
  svg{
  font-size: 4rem;
}
`;
const Nav = styled.div`
background: rgb(166,8,255);
background: linear-gradient(90deg, rgba(166,8,255,1) 21%, rgba(223,57,244,1) 100%);
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgb(255,255,255);
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
`
const SignIn = styled.div`
margin-right: 2rem;
color: white;
font-family: 'Overpass', sans-serif;
font-size: 25px;
cursor: pointer;
`
const SignUp = styled.div`
font-family: 'Overpass', sans-serif;
color: white;
font-size: 25px;
cursor: pointer;
`
const Container = styled.div`
padding-top: 35px;
font-size: 2rem;
display: flex;
right: 20px;
padding-right:20px;
padding-bottom:35px;
`



export default App
