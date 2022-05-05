import Pages from "./pages/Pages";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={'/'}>Price <GiKnifeFork />Hunter</Logo>
        <Search/> 
        <Container>
        <SignIn>Вход</SignIn>
        <SignUp>Регистрация</SignUp>
        </Container>
      </Nav>      
        <Pages />
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
