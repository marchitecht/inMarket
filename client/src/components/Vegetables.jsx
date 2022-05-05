import styled, {keyframes} from "styled-components";
import tomato from "../img/categoryImg/vej/pom.jpg"
import cabach from "../img/categoryImg/vej/cabach.jpg"
import morc from "../img/categoryImg/vej/morc.jpg"
import { useState } from "react";

const allVeggies = [tomato, morc, cabach];

function Vegetables() {

  const VegetСategories = [{
   /*  img: berries,
    link: '/berries',
    name: 'Ягоды', */
  },{
   /*  img: bread,
    link: '/bread',
    name: 'Хлеб', */
  },{
   /*  img: pear,
    link: '/fruits',
    name: 'Фрукты', */
  },]

  const [vegies, setVegies] = useState([allVeggies[0], allVeggies[1], allVeggies[2]]);
  const [goRight, setGoRight] = useState(false);
  const [index, setIndex] = useState(0);

  const leftClickHandler = (e) => {
    setGoRight(true);
    setTimeout(() => {
      setVegies([vegies[1], vegies[2], vegies[0]]);
      setGoRight(false);
    }, 400)
  }

  return (
    <Flex>
<Container>
<Card go={goRight} veg={vegies}> 
<Content> 
</Content>
</Card>

<CardLeft onClick={leftClickHandler} go={goRight} veg={vegies}> 
<Content> 
</Content>
</CardLeft>

<CardRight> 
<Content> 
</Content>
</CardRight>

</Container>
    </Flex>
  )
  
}
export default Vegetables

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
position:relative;
padding-top: 80px;
width: 1500px;
height: 80vh;
background-color: black;
z-index:1;
`;

const goRightAnimCenter = keyframes`
  from {
    left: 520px;
    width:460px;
    height:460px;
    top: 100px;
  }
  to {
    width:260px;
    height:260px;
    left: 1070px;
    top: 200px;
  }
`

const Card = styled.div`
position: absolute;left: 520px;
left: 520px;
width:460px;
height:460px;
top: 100px;
box-shadow: 20px 20px 50px #585858;
border-radius: 100%;
background: #e9a888d2;
background-image: url(${props => props.veg[0]});
background-position: center;
background-size: 250%;
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
transition: background-size 0.3s;
animation: ${props => props.go ? goRightAnimCenter : 'none'} 0.4s linear;
:hover{
  background-size: 280%;
 }
`;

const goRightAnim = keyframes`
  from {
    width:260px;
    height:260px;
    left: 170px;
    top: 200px;
  }
  to {
    left: 520px;
    width:460px;
    height:460px;
    top: 100px;
  }
`

const CardLeft = styled.div`
position: absolute;
width:260px;
height:260px;
left: 170px;
top: 200px;
box-shadow: 20px 20px 50px #585858;
border-radius: 100%;
background: #e9a888d2;
background-image: url(${morc});
background-position: center;
background-size: 250%;
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
transition: background-size 0.3s;
animation: ${props => props.go ? goRightAnim : 'none'} 0.4s linear;
`;


const CardRight = styled.div`
position: absolute;
width:260px;
height:260px;
left: 1070px;
top: 200px;
box-shadow: 20px 20px 50px #585858;
border-radius: 100%;
background: #e9a888d2;
background-image: url(${cabach});
background-position: center;
background-size: 250%;
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
`;

const Content = styled.div`
padding: 20px;
text-align: center;
transition: 0.5s;

`;
