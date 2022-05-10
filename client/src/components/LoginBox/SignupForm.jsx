import React,{useContext} from 'react';
import {BoxContainer, FormContainer,Input,SubmitButton,MutedLink,BoldLink} from '../LoginBox/commonStyles';
import {AccountContext} from './accountsContext';

function SignupForm(props) {
  const {switchToSignIn} = useContext(AccountContext)
  return (
    <BoxContainer>
      <FormContainer>
        <Input type='text' placeholder='Имя'/>
        <Input type='text' placeholder='Фамилия'/>
        <Input type='password' placeholder='пароль'/>
        <Input type='password' placeholder='подтвердите пароль'/>
      </FormContainer>
       < SubmitButton type='submit'>Зарегистрироваться</SubmitButton>
        <MutedLink>Не можешь войти? <BoldLink href='#'onClick={switchToSignIn}>Присоединиться</BoldLink></MutedLink>
        
    </BoxContainer>
  )
}

export default SignupForm
