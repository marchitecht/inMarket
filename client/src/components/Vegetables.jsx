import styled from "styled-components";
import {veggies} from '../data'

function Vegetables() {

  return (
    <>
<Container>
<Card1> 
<Content> 
<h2>{veggies[0].title}</h2>
</Content>
</Card1>

<Card2> 
<Content> 
<h2>{veggies[1].title}</h2>
</Content>
</Card2>

<Card3> 
<Content> 
<h2>{veggies[2].title}</h2>
</Content>
</Card3>

<Card4> 
<Content> 
<h2>{veggies[3].title}</h2>
</Content>
</Card4>

<Card5> 
<Content> 
<h2>{veggies[4].title}</h2>
</Content>
</Card5>

</Container>
    </>
  )
  
}
export default Vegetables

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
background-image: url('https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
background-image: url('https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' );
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
background-image: url('https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
background-image: url('https://images.pexels.com/photos/4110456/pexels-photo-4110456.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
background-image: url('https://images.pexels.com/photos/594137/pexels-photo-594137.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
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
