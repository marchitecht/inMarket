import styled, { keyframes } from "styled-components";
import borodino from "../img/categoryImg/bread/borodino.jpg";
import czelnozernovoj from "../img/categoryImg/bread/czelnozernovoj.jpg";
import pshenichniy from "../img/categoryImg/bread/pshenichniy.jpg";
import rjanoy from "../img/categoryImg/bread/rjanoy.jpg";
import purpleArrow from "../img/footerIcons/purple_arrow.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let allBread = [
  {
    img: borodino,
    link: "/bread/borodinobread",
    name: "Бородинский хлеб",
  },
  {
    img: czelnozernovoj,
    link: "/bread/wholegrainbread",
    name: "Цельнозерновой хлеб",
  },
  {
    img: pshenichniy,
    link: "/bread/wheatbread",
    name: "Пшеничный хлеб",
  },
  {
    img: rjanoy,
    link: "/bread/ryebread",
    name: "Ржаной хлеб",
  },
];

const staticAllBread = [...allBread];

function Bread() {

  const [bread, setBread] = useState(allBread);
  const [goRight, setGoRight] = useState(false);
  const [goLeft, setGoLeft] = useState(false);
  const [staticBread, setstaticBread] = useState(staticAllBread);
  const navigate = useNavigate()

  const clickHandler = (dir) => {
    if (dir === "r") {
      setGoRight(true);
      setTimeout(() => {
        allBread.unshift(allBread.pop());
        setBread(allBread);
        setGoRight(false);
      }, 380);
    } else {
      setGoLeft(true);
      setTimeout(() => {
        allBread.push(allBread.shift());
        setBread(allBread);
        setGoLeft(false);
      }, 380);
    }
  };



  return (
    <>
      <Flex>
      <Container>
        
      </Container>
      </Flex>
    </>
  );
}
export default Bread;

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

