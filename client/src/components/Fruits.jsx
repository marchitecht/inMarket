import styled from "styled-components";
import {fruit} from '../data'

function Fruits() {

  return (
    <>
<Container>
<Card1> 
<Content> 
<h2>{fruit[0].title}</h2>
</Content>
</Card1>

<Card2> 
<Content> 
<h2>{fruit[1].title}</h2>
</Content>
</Card2>

<Card3> 
<Content> 
<h2>{fruit[2].title}</h2>
</Content>
</Card3>

<Card4> 
<Content> 
<h2>{fruit[3].title}</h2>
</Content>
</Card4>

<Card5> 
<Content> 
<h2>{fruit[4].title}</h2>
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
background-image: url('https://phonoteka.org/uploads/posts/2021-03/thumbs/1616697508_22-p-apelsini-fon-26.jpg');
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
background-image: url('https://shahrkhan.ir/wp-content/uploads/2019/06/m240.jpg' );
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
background-image: url('https://snappygoat.com/b/b79d164dde9aaf9c36cf53947d5a7325825e11d3');
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
background-image: url('https://a.d-cd.net/jaAAAgOv0uA-960.jpg');
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
background-image: url('https://anpitomnik.ru/upload/iblock/2e8/2e8438cd4615fccc96741ebba8e4f871.jpg');
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
