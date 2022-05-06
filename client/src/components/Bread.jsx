import styled from "styled-components";


function Bread() {

  return (
    <>
      <Flex>
        <Container>
          <Card>
            <Content></Content>
          </Card>
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
`

const Container = styled.div`
position:relative;
padding-top: 80px;
width: 1500px;
height: 80vh;
background-color: black;
z-index:1;
`;

const Card = styled.div`
position: absolute;left: 520px;
left: 520px;
width:460px;
height:460px;
top: 100px;
box-shadow: 20px 20px 50px #585858;
border-radius: 100%;
background: #e9a888d2;
background-image: url();
background-position: center;
background-size: 250%;
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
transition: background-size 0.3s;
:hover{
  background-size: 280%;
 }
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  transition: 0.5s;
`;
