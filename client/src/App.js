import Pages from "./pages/Pages";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'
import Search from "./components/Search";
import Footer from "./components/Footer";

import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import Bread from "./components/Bread";
import Berries from "./components/Berries";
import {MdPriceChange} from 'react-icons/md'
import LoginForm from './components/LoginForm'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./redux/reducers/authReducer";
import Category from "./components/Category";
function App() {
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
      <BrowserRouter>
      <Nav>
        <Logo to={'/'}>Price <GiKnifeFork />Hunter</Logo>
        <Search/> 
        <Container>
        <SignIn>Вход</SignIn>
        <SignUp>Регистрация</SignUp>
        <div>{user ? `Пользователь ${user.email} в системе` : "Авторизуйтесь"}</div>    
        </Container>
      </Nav>    
      <Routes>
          <Route path='/auth/signin' element={<LoginForm />}></Route>
        <Route path="/" element={<Category/>} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/berries" element={<Berries />} />
        </Routes>  
        <Footer />
        
       
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  padding-left:20px;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
  color: #5d5d5d;
  svg{
  font-size: 4rem;
}
`;
const Nav = styled.div`
color: #5d5d5d;
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
font-family: 'Overpass', sans-serif;
font-size: 25px;
cursor: pointer;
`
const SignUp = styled.div`
font-family: 'Overpass', sans-serif;
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

export default App;
