import styled, { keyframes } from "styled-components";
import an from "../../img/categoryImg/fruts/an.jpg";
import apple from "../../img/categoryImg/fruts/apple.jpg";
import bananas from "../../img/categoryImg/fruts/bananas.jpg";
import mango from "../../img/categoryImg/fruts/mango.jpeg";
import oranges from "../../img/categoryImg/fruts/oranges.jpg";
import pear from "../../img/categoryImg/fruts/pear.jpg";
import pers from "../../img/categoryImg/fruts/pers.jpg";
import kiwi from "../../img/categoryImg/fruts/kiwi.jpg";
import purpleArrow from "../../img/footerIcons/purple_arrow.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let allFruits = [
  {
    img: an,
    link: "/fruits/pineapple",
    name: "Ананасы",
  },
  {
    img: apple,
    link: "/fruits/apple",
    name: "Яблоки",
  },
  {
    img: bananas,
    link: "/fruits/bananas",
    name: "Бананы",
  },
  {
    img: mango,
    link: "/fruits/mango",
    name: "Манго",
  },
  {
    img: oranges,
    link: "/fruits/oranges",
    name: "Апельсины",
  },
  {
    img: pear,
    link: "/fruits/pear",
    name: "Груши",
  },
  {
    img: pers,
    link: "/fruits/peaches",
    name: "Персики",
  },
  {
    img: kiwi,
    link: "/fruits/kiwi",
    name: "Киви",
  },
];

const staticAllFruits = [...allFruits];

function Fruits() {

  const [fruits, setFruits] = useState(allFruits);
  const [goRight, setGoRight] = useState(false);
  const [goLeft, setGoLeft] = useState(false);
  const [staticFruits, setstaticVegies] = useState(staticAllFruits);
  const navigate = useNavigate()

  const clickHandler = (dir) => {
    if (dir === "r") {
      setGoRight(true);
      setTimeout(() => {
        allFruits.unshift(allFruits.pop());
        setFruits(allFruits);
        setGoRight(false);
      }, 380);
    } else {
      setGoLeft(true);
      setTimeout(() => {
        allFruits.push(allFruits.shift());
        setFruits(allFruits);
        setGoLeft(false);
      }, 380);
    }
  };

  return (
    <>
      <Flex>
      <Container>
        <ArrowLeft onClick={() => clickHandler("l")}></ArrowLeft>
        <ArrowRight onClick={() => clickHandler("r")}></ArrowRight>
        <Card goR={goRight} goL={goLeft} veg={fruits} onClick={()=> navigate(allFruits[Math.floor(allFruits.length / 2)].link)}>
          <ContentDiv go={goRight || goLeft}>
            <Content>
              {allFruits[Math.floor(allFruits.length / 2)].name}
            </Content>
          </ContentDiv>
        </Card>

        <CardLeftNew goR={goRight} veg={fruits}>
          <Content></Content>
        </CardLeftNew>

        <CardRightNew goL={goLeft} veg={fruits}>
          <Content></Content>
        </CardRightNew>

        <CardLeft goR={goRight} goL={goLeft} veg={fruits}>
          <Content></Content>
        </CardLeft>

        <CardRight goL={goLeft} goR={goRight} veg={fruits}>
          <Content></Content>
        </CardRight>

        <Menu>
         {staticAllFruits.map((el) => {
           return (
             <Product onClick={()=> navigate(el.link)} selected={allFruits[Math.floor(allFruits.length / 2)].name === el.name}>
               {el.name}
             </Product>
           )
         })}
        </Menu>
      </Container>
      </Flex>
    </>
  );
}
export default Fruits;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  padding-top: 80px;
  width: 1500px;
  height: 80vh;
  z-index: 1;
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
`;

const goLeftAnimCenter = keyframes`
  from {
    left: 520px;
    width:460px;
    height:460px;
    top: 100px;
  }
  to {
    width:260px;
    height:260px;
    left: 170px;
    top: 200px;
  }
`;

const ContentAnim = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`;
const ContentAnimOut = keyframes`
  from{
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
  to{
    opacity: 0;
  }
`;

const Content = styled.div`
  font-family: "Marck Script", cursive;
  font-size: 60px;
  text-align: center;
  transition: 0.5s;
  color: rgb(0, 0, 0, 0.7);
  transition: font-size 0.3s, color 0.3s;
  cursor: pointer;
`;

const ContentDiv = styled.div`
  background-color: rgb(255, 255, 255, 0.5);
  width: 100%;
  height: 100px;
  line-height: 100px;
  animation: ${(props) => (props.go ? ContentAnimOut : ContentAnim)} 0.5s;
  transition: background-color 0.3s, height 0.3s, line-height 0.3s;
`;

const Card = styled.div`
  position: absolute;
  left: 520px;
  left: 520px;
  width: 460px;
  height: 460px;
  top: 100px;
  box-shadow: 20px 20px 50px #585858;
  border-radius: 100%;
  background-image: url(${(props) => props.veg[Math.floor(props.veg.length / 2)].img});
  background-position: center;
  background-size: 250%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: background-size 0.3s;
  animation: ${(props) => props.goR ? goRightAnimCenter : props.goL ? goLeftAnimCenter : "none"}
    0.4s ease-in-out;
  cursor: pointer;
  :hover {
    background-size: 280%;
  }
  :hover ${ContentDiv} {
    background-color: rgb(255, 255, 255, 0.8);
    height: 110px;
    line-height: 110px;
  }
  :hover ${Content} {
    color: rgb(0, 0, 0, 0.85);
    font-size: 66px;
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
`;

const goRightAnimNewOut = keyframes`
  from {
    width:260px;
    height:260px;
    left: 170px;
    top: 200px;
    opacity:1;
  }
  to {
    width:60px;
    height:60px;
    left: 270px;
    top: 300px;
    opacity: 0;
  }
`;

const CardLeft = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  left: 170px;
  top: 200px;
  box-shadow: 20px 20px 50px #585858;
  border-radius: 100%;
  background-image: url(${(props) => props.veg[Math.floor(props.veg.length / 2) - 1].img});
  background-position: center;
  background-size: 250%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: background-size 0.3s;
  animation: ${(props) => props.goR ? goRightAnim : props.goL ? goRightAnimNewOut : "none"}
    0.4s ease-in-out;
`;

const goRightAnimNew = keyframes`
  from {
    width:60px;
    height:60px;
    left: 270px;
    top: 300px;
    opacity: 0;
  }
  to {
    width:260px;
    height:260px;
    left: 170px;
    top: 200px;
    opacity: 1;
  }
`;

const goLeftAnimNew = keyframes`
  from {
    width:60px;
    height:60px;
    left: 1170px;
    top: 300px;
    opacity: 0;
  }
  to {
    width:260px;
    height:260px;
    left: 1070px;
    top: 200px;
    opacity: 1;
  }
`;

const CardLeftNew = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 270px;
  top: 300px;
  box-shadow: 20px 20px 50px #585858;
  border-radius: 100%;
  background-image: url(${(props) => props.veg[Math.floor(props.veg.length / 2) - 2].img});
  background-position: center;
  background-size: 250%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: background-size 0.3s;
  width: 260px;
  opacity: 0;
  animation: ${(props) => (props.goR ? goRightAnimNew : "none")} 0.4s
    ease-in-out;
`;

const goLeftAnimNewOut = keyframes`
  from {
    height:260px;
    left: 1070px;
    top: 200px;
    opacity: 1;
  }
  to {
    width:60px;
    height:60px;
    left: 1170px;
    top: 300px;
    opacity: 0;
  }
`;

const CardRightNew = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  left: 1170px;
  top: 300px;
  box-shadow: 20px 20px 50px #585858;
  border-radius: 100%;
  background-image: url(${(props) => props.veg[Math.floor(props.veg.length / 2) + 2].img});
  background-position: center;
  background-size: 250%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  transition: background-size 0.3s;
  opacity: 0;
  animation: ${(props) => (props.goL ? goLeftAnimNew : "none")} 0.4s ease-in-out;
`;

const goLeftAnim = keyframes`
  from {
    width:260px;
    height:260px;
    left: 1070px;
    top: 200px;
  }
  to {
    left: 520px;
    width:460px;
    height:460px;
    top: 100px;
  }
`;

const CardRight = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  left: 1070px;
  top: 200px;
  box-shadow: 20px 20px 50px #585858;
  border-radius: 100%;
  background-image: url(${(props) => props.veg[Math.floor(props.veg.length / 2) + 1].img});
  background-position: center;
  background-size: 250%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  animation: ${(props) => props.goL ? goLeftAnim : props.goR ? goLeftAnimNewOut : "none"}
    0.4s ease-in-out;
`;

const ArrowLeft = styled.div`
  position: absolute;
  left: 50px;
  top: 290px;
  background-image: url(${purpleArrow});
  background-size: 80px;
  width: 80px;
  height: 80px;
  cursor: pointer;
`;
const ArrowRight = styled.div`
  position: absolute;
  right: 50px;
  top: 290px;
  background-image: url(${purpleArrow});
  background-size: 80px;
  width: 80px;
  height: 80px;
  transform: scaleX(-1);
  cursor: pointer;
`;
const Menu = styled.div`
  font-size: 30px;
  position: absolute;
  gap: 30px;
  left: 520px;
  left: 220px;
  width: 1070px;
  height: 200px;
  top: 600px;
  /* background: #e9a888d2; */
  background-position: center;
  background-size: 250%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-around;
`;

const Product = styled.div`
  cursor: pointer;
  font-family: 'Overpass', sans-serif;
  color: ${props => props.selected ? '#9932cc' : 'black'};
`;
