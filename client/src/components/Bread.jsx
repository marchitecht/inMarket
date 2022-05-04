import styled from "styled-components";
import {bread} from '../data';

function Bread() {

  return (
    <>
    <Container>
<Card1> 
<Content> 
<h2>{bread[0].title}</h2>
</Content>
</Card1>

<Card2> 
<Content> 
<h2>{bread[1].title}</h2>
</Content>
</Card2>

<Card3> 
<Content> 
<h2>{bread[2].title}</h2>
</Content>
</Card3>

<Card4> 
<Content> 
<h2>{bread[3].title}</h2>
</Content>
</Card4>

<Card5> 
<Content> 
<h2>{bread[4].title}</h2>
</Content>
</Card5>

</Container>
    </>
  )
  
}
export default Bread

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
background-image: url('https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
background-image: url('https://i.pinimg.com/736x/12/aa/0b/12aa0bf8d40e357b77425cec77427946--stale-bread-food-magazines.jpg');
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
background-image: url('https://images.pexels.com/photos/7635062/pexels-photo-7635062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
background-image: url('https://maxvps.ru/wp-content/uploads/a/0/1/a0160c5eff27049f23c45bf868eed8a3.jpeg');
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
background-image: url('https://images.pexels.com/photos/7568493/pexels-photo-7568493.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
