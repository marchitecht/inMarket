import styled from 'styled-components';


export const BoxContainer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;
export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* box-shadow: 0px 0px 2px rgba(15,15,15,0.19); */
`;
export const MutedLink = styled.a`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
  margin: 1em;
`;
export const BoldLink = styled.a`
    font-size: 12px;
  color:rgb(166, 8, 255);
  font-weight: 500;
  text-decoration: none;
`;
export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 5px 15px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 20px;


  &::placeholder{
    color: rgba(200, 200, 200, 1);
  };
  &:not(:last-of-type){
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(166, 8, 255);
  }
`;
export const SubmitButton = styled.button`
  width:100%;
  padding: 20px 20%;
  margin: 0.6em;
  color: #fff;
  font-size: 20px;
  font-weight:800;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(166, 8, 255);
     background: linear-gradient(
       90deg,
       rgba(166, 8, 255, 1) 21%,
       rgba(223, 57, 244, 1) 100%
     );
     &:hover{
       filter: brightness(1.03);
     }
`;
