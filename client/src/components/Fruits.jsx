import styled from "styled-components";


function Fruits() {

  return (
    <>
<Container>
<Card1> 
<Content> 
<h2></h2>
</Content>
</Card1>

<Card2> 
<Content> 
<h2></h2>
</Content>
</Card2>

<Card3> 
<Content> 
<h2></h2>
</Content>
</Card3>

<Card4> 
<Content> 
<h2></h2>
</Content>
</Card4>

<Card5> 
<Content> 
<h2></h2>
</Content>
</Card5>

</Container>
    </>
  )
  
}
export default Fruits

const Container = styled.div`
position:relative;
display: flex;
justify-content: center;
align-items: center;
max-width: 100%;
flex-wrap: wrap;
z-index:1;
`;
const Card1 = styled.div`
position:relative;
width:300px;
height:400px;
margin:30px;
box-shadow: 20px 20px 50px #585858;
border-radius:15px;
background: #e9a888d2;
background-image: url();
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
:hover{
 transform: translateY(-0.9rem) scale(1);
 border-radius: 1rem; 
 animation: moveToTop 0.2s ease-in-out both;
 }
`;

const Card2 = styled.div`
position:relative;
width:300px;
height:400px;
margin:30px;
box-shadow: 20px 20px 50px #585858;
border-radius:15px;
background: #e9a888d2;
background-image: url();
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
:hover{
 transform: translateY(-0.9rem) scale(1);
 border-radius: 1rem; 
 animation: moveToTop 0.2s ease-in-out both;
 }
`;

const Card3 = styled.div`
position:relative;
width:300px;
height:400px;
margin:30px;
box-shadow: 20px 20px 50px #585858;
border-radius:15px;
background: #e9a888d2;
background-image: url();
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
:hover{
 transform: translateY(-0.9rem) scale(1);
 border-radius: 1rem; 
 animation: moveToTop 0.2s ease-in-out both;
 }
`;

const Card4 = styled.div`
position:relative;
width:300px;
height:400px;
margin:30px;
box-shadow: 20px 20px 50px #585858;
border-radius:15px;
background: #e9a888d2;
background-image: url();
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
:hover{
 transform: translateY(-0.9rem) scale(1);
 border-radius: 1rem; 
 animation: moveToTop 0.2s ease-in-out both;
 }
`;

const Card5 = styled.div`
position:relative;
width:300px;
height:400px;
margin:30px;
box-shadow: 20px 20px 50px #585858;
border-radius:15px;
background: #e9a888d2;
background-image: url();
color: white;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
backdrop-filter: blur(5px);
:hover{
 transform: translateY(-0.9rem) scale(1);
 border-radius: 1rem; 
 animation: moveToTop 0.2s ease-in-out both;
 }
`;

const Content = styled.div`
padding: 20px;
text-align: center;
transition: 0.5s;

`;
