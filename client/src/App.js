import Pages from "../src/pages/Pages";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/reducers/authReducer";
import AppRoutes from "./components/AppRoutes/index";




function App() {
  const [token, setToken] = useState(localStorage.getItem("token"))
  // const user = useSelector((store) => store.authReducer.user);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(checkAuth());
    }
  }, [token]);
  return (
    <div className="App">
       <Pages />
    </div>
  );
}
export default App;
