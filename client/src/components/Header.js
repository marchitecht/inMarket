import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/authReducer";

const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick =  () => {
        dispatch(logout())
         setTimeout(() => {
            navigate('/')
         }, 50)   
    }
    const user = useSelector(store => store.authReducer.user)
    console.log(user);
    return (
        <Nav>
            <Logo
                src="https://cdn-icons-png.flaticon.com/512/862/862819.png"
                to={"/"}
            >
                inMarket
            </Logo>
            <Container>
                {(user) ? <button type="button" onClick={handleClick}>Выйти</button> : <Link to='/auth/signup'>Зарегистрироваться</Link>}
            </Container>
        </Nav>
    )
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
  height: 7vh;
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

export default Header;