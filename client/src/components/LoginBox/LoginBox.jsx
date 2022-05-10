import React, { useState } from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountsContext";
import SignupForm from "./SignupForm";

const backDropVariants = {
  expanded: {
    width: "490%",
    height: "4100px",
    borderRadius: "50%",
    transform: "rotate(20deg)",
  },
  collapsed: {
    width: "140%",
    height: "1050px",
    borderRadius: "35%",
    transform: "rotate(20deg)",
  },
};
const expandedTrasition = {
  type: "spring",
  duration: 2,
  stiffness: 3,
};

function LoginBox(props) {
  const [isExpanded, setExpenaded] = useState(false);
  const [active, setActive] = useState("signin");

  const expandingAnimation = () => {
    setExpenaded(true);
    setTimeout(() => {
      setExpenaded(false);
    }, expandedTrasition.duration * 1000 - 1500);
  };

  const switchToSignUp = () => {
    expandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };
  const switchToSignIn = () => {
    expandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const contextValue = { switchToSignUp, switchToSignIn };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backDropVariants}
            transition={expandedTrasition}
          />
          {active === 'signin' && <HeaderContainer>
            <HeaderText>Salam</HeaderText>
            <HeaderText>Brat</HeaderText>
            <SmallText>Торгуй прямо сейчас!</SmallText>
          </HeaderContainer>}
          {active === 'signup' && <HeaderContainer>
            <HeaderText>Создай</HeaderText>
            <HeaderText>аккаунт</HeaderText>
            <SmallText>Торгуй прямо сейчас!</SmallText>
          </HeaderContainer>}
        </TopContainer>
        <InnerContainer>
         {active === 'signin' && <LoginForm />}
         {active === 'signup' && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8rem;
`;

const BoxContainer = styled.div`
  width: 40rem;
  min-height: 35vh;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
  margin: 10% auto;
`;
const TopContainer = styled.div`
  width: 100%;
  height: 18rem;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  padding: 0 5em;
  padding-bottom: 5em;
  margin: 2em;
`;

const BackDrop = styled(motion.div)`
  width: 100%;
  height: 800px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(5deg);
  top: -615px;
  left: -250px;
  background: rgb(166, 8, 255);
  background: linear-gradient(
    90deg,
    rgba(166, 8, 255, 1) 21%,
    rgba(223, 57, 244, 1) 100%
  );
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.h2`
  font-size: 55px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;
const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  z-index: 10;
  margin: 0;
  margin-top: 8px;
`;
export default LoginBox;
