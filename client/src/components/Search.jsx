import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import icon from '../img/footerIcons/face.png'

function Search () {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  }

  return (
    <Container>
  <Icon></Icon>
   <InputStyle onSubmit={submitHandler}>
   <input 
      onChange={(e) => setInput(e.target.value)} 
      type="text" 
      value={input} 
      /></InputStyle>
   </Container>

  );
}

const Container = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 40px;
 width: 23vw;
 border-radius: 10px;
 background-color: #7a7a7a;
`
const InputStyle = styled.form`
   width: 20vw;
   height: 32px;
   input {
    width: 20vw;
    height: 30px;
    border: none;
    background-color: #7a7a7a;
    font-size: 22px;
    color: white;
   }
   input:focus { outline: none; }
`

const Icon = styled.div`
  background-image: url(${icon});
  background-size: 20px;
  width: 20px;
  height: 20px;
`
 
export default Search;
