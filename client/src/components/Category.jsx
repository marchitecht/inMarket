import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom';
import tomato1 from '../img/tomato.png';
import berries from '../img/berries.png';
import bread from '../img/bread.png';
import pear from '../img/pear.png';
import Background from './Background';
import { getCategories } from '../redux/reducers/productsReducer';


const categoriees = [{
  img: tomato1,
  color1: '#f0a792',
  color2: '#bc6b53',
  color3: '#e96841',
  color4: '#5e2020',
  link: '/vegetables',
  name: 'Овощи',
},{
  img: berries,
  color1: '#9392f0',
  color2: '#5355bc',
  color3: '#5241e9',
  color4: '#21205e',
  link: '/berries',
  name: 'Ягоды',
},{
  img: bread,
  color1: '#f0da92',
  color2: '#bca953',
  color3: '#e9bc41',
  color4: '#5e5320',
  link: '/bread',
  name: 'Хлеб',
},{
  img: pear,
  color1: '#dff092',
  color2: '#a0bc53',
  color3: '#b7e941',
  color4: '#465e20',
  link: '/fruits',
  name: 'Фрукты',
},]

function Category() {
  const dispatch = useDispatch()
  const categories = useSelector(store => store.productsReducer.categories)
  console.log('check --->', categories);
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  const navigate = useNavigate()
  return (
<>
<Background/>
<Container>
{categoriees.map((el) => {
  return (
  <>
  <Vegetables onClick={()=> navigate(el.link)} colors={[el.color1, el.color2, el.color3]}> 
<Content colorText={el.color4}> 
  {el.name}
</Content>
<VegetablesDiv img={el.img}>
</VegetablesDiv>
</Vegetables>
  </>
  )
})}
</Container>
</>
  )
}

 const Container = styled.div`
 height: 95vh;
 margin-top: -7rem;
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  z-index:1;
`;

const VegetablesDiv = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    /* background-color: black; */
    background-repeat: no-repeat;
    background-image: url(${props => props.img});
    background-size: 80px;
    transform: rotate(0deg) translateX(-150px) rotate(0deg);
    -webkit-filter: saturate(1);
    filter: saturate(1);
    transition: transform 1.3s, -webkit-filter 1.3s, filter 1.3s;
    top: -23px;
    left: 180px;
`;


const Vegetables = styled.div`
  position:relative;
  width:300px;
  height:300px;
  margin:30px;
  border-radius:150px;
  background: ${props => props.colors[0]};
  opacity: 0.77;
  outline: 6px solid ${props => props.colors[1]};
  transition: opacity 1.3s, outline 1.3s;
  :hover ${VegetablesDiv} {
    transform: rotate(87deg) translateX(270px) rotate(-87deg);
    -webkit-filter: saturate(1.2);
    filter: saturate(1.2);
  }
  :hover {
    opacity: 0.95;
    outline: 6px solid ${props => props.colors[2]};
    cursor: pointer;
  }
`;

const Content = styled.div`
text-align: center;
transition: 0.5s;
font-family: 'Marck Script', cursive;
font-size: 60px;
line-height: 300px;
font-weight: bold;
color: ${props => props.colorText};
transition: font-size 0.5s;
:hover {
  font-size: 68px;
}
`;

export default Category
