import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

function Category() {
  return (
    <List>
      <Slink to={'/'}>
       
        <h4>Овощи</h4>
      </Slink >
      <Slink to={'/'}>
       
        <h4>Фрукты</h4>
      </Slink>
      <Slink to={'/'}>
        
        <h4>Ягоды</h4>
      </Slink>
      <Slink to={'/'}>
       
        <h4>Хлеб</h4>
      </Slink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  backgound: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4{
    color: white;
    font-size: 1rem;
  }
  svg {
    color: black;
    font-size: 1.5rem;
  }

  &.active{
    background: linear-gradient(to right, #f27121, #e94057);

    svg{
      color: black;
    }
  }
`;

export default Category
