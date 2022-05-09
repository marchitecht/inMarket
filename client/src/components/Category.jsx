import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Search from "../components/Search";

function Category() {
  const navigate = useNavigate();
  return (
    <>
      <Search />
      <Container>
        <Card1 onClick={() => navigate("/vegetables")}>
          <Content>
            <h2>Овощи</h2>
          </Content>
        </Card1>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  flex-wrap: wrap;
  z-index: 1;
`;
const Card1 = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 30px;
  border-radius: 150px;
  background: #f0d692;
  opacity: 0.9;
  outline: 6px solid #a1a086;
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  transition: 0.5s;
`;

export default Category;
