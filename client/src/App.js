import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'
import Vegetables from "./components/Vegetables";
import Fruits from "./components/Fruits";
import Bread from "./components/Bread";
import Berries from "./components/Berries";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={'/'}>Price <GiKnifeFork />Hunter</Logo>
      </Nav>      
        <Pages />
        <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/bread" element={<Bread />} />
        <Route path="/berries" element={<Berries />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  font-family: 'Montserrat', sans-serif;
`;
const Nav = styled.div`
padding: 4rem 0rem;
display: flex;
justify-content: center;
align-items: center;
svg{
  font-size: 4rem;
}
`

export default App;
