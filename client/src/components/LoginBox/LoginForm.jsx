import React, {useContext} from 'react';
import {BoxContainer, FormContainer,Input,SubmitButton,MutedLink,BoldLink} from '../LoginBox/commonStyles';
import {AccountContext} from './accountsContext';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/authReducer";
import GoogleButton from 'react-google-button'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
function LoginForm(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {switchToSignUp} = useContext(AccountContext)
  const navigate = useNavigate()
  const handleClick = () => {
    dispatch(login({email, password}))
    navigate('/')
  }
  const redirectToGoogleSSO = async () => {
    const googleLoginURL = 'http://localhost:5000/api/v1/login/google'
    const newWindow = window.open(
      googleLoginURL,
      '_blank',
      'width=500, height=600',
    )
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type='email' onChange={e => setEmail(prev => e.target.value)} 
            value={email}  placeholder='email'/>
        <Input type='password' onChange={e => setPassword(prev => e.target.value)} 
            value={password}  placeholder='password'/>
          
                <GoogleButton onClick={redirectToGoogleSSO}/>
         
      </FormContainer>
       < SubmitButton type='button' onClick={handleClick}>Войти</SubmitButton>
        <MutedLink>Не можешь войти? <BoldLink href='#' onClick={switchToSignUp}>Присоединиться</BoldLink></MutedLink>
        
    </BoxContainer>
  )
}

export default LoginForm
