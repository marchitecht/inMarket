import React, {useContext} from 'react';
import {BoxContainer, FormContainer,Input,SubmitButton,MutedLink,BoldLink} from '../LoginBox/commonStyles';
import {AccountContext} from './accountsContext';

function LoginForm(props) {

  const {switchToSignUp} = useContext(AccountContext)

  return (
    <BoxContainer>
      <FormContainer>
        <Input type='email' placeholder='email'/>
        <Input type='password' placeholder='password'/>
      </FormContainer>
       < SubmitButton type='submit'>Войти</SubmitButton>
        <MutedLink>Не можешь войти? <BoldLink href='#' onClick={switchToSignUp}>Присоединиться</BoldLink></MutedLink>
        
    </BoxContainer>
  )
}

export default LoginForm
