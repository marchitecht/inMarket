import Pages from "../src/pages/Pages";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/reducers/authReducer";
import Footer from "./components/Footer";
import Search from "./components/Search";
import AppRoutes from "./components/AppRoutes";

const { Sider, Content } = Layout;

function App() {

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
            <Search/>
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
        </Layout>
       <Footer />
      </Layout>
    </div>
  );
}
export default App;
