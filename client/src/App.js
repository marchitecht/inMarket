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

            <Pages />
    </div>
  );
}
export default App;
