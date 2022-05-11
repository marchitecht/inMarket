import { Select, Upload } from 'antd';
import UploaderAnt from './UploaderAnt';
import React,{useContext, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {BoxContainer, FormContainer,Input,SubmitButton,MutedLink} from '../LoginBox/commonStyles';
import {AccountContext} from './accountsContext';
import { useDispatch } from 'react-redux';
import { registration } from '../../redux/reducers/authReducer';
const { Option } = Select;


function SignupForm(props) {
  const navigate = useNavigate()
  const {switchToSignIn} = useContext(AccountContext)
  const dispatch = useDispatch()
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [role, setRole] = useState('Покупатель')
  const [password, setPassword] = useState('')

  const handleSubmit = () =>{
    dispatch(registration({email, password, firstName, lastName, role}))
    navigate('/')
  }
  return (
    <BoxContainer>
      <FormContainer>
        <Input value={firstName} onChange={(e) => setFirstname(prev => e.target.value)} type='text' placeholder='Имя'/>
        <Input value={lastName} onChange={(e) => setLastname(prev => e.target.value)} type='text' placeholder='Фамилия'/>
        <Input value={email} onChange={(e) => setEmail(prev => e.target.value)} type='email' placeholder='Ваш email'/>
        <Input value={password} onChange={(e) => setPassword(prev => e.target.value)} type='password' placeholder='пароль'/>
        <Input value={secondPassword} onChange={(e) => setSecondPassword(prev => e.target.value)} type='password' placeholder='подтвердите пароль'/>
        <select  onChange={(e) => setRole(prev => e.target.value)}>
          <option selected value={'Покупатель'}>Покупатель</option>
          <option value={'Продавец'}>Продавец</option>
        </select>
      </FormContainer>
       <SubmitButton onClick={handleSubmit} type='button'>Зарегистрироваться</SubmitButton>
        <MutedLink>Не можешь войти? <Link to='/auth/signin'onClick={switchToSignIn}>Присоединиться</Link></MutedLink> 
    </BoxContainer>
  )
}

export default SignupForm
