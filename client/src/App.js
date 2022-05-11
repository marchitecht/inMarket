import Pages from "../src/pages/Pages";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/reducers/authReducer";
import Footer from "./components/Footer";
import Search from "./components/Search";
import AppRoutes from "./components/AppRoutes";


function App() {
  let token;
  // const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    token = localStorage.getItem("token")
    if (token) {
      dispatch(checkAuth());
    }
  }, [token, dispatch]);
  return (
    <div className="App">

            <Pages />
    </div>
  );
}
export default App;
