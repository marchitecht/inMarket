import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter, Link} from 'react-router-dom';
import Search from "./components/Search";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <Logo to={'/'}>price <GiKnifeFork />Hunter</Logo>
      </Nav>
        <Search />
        <Category/>
        <Pages />
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
