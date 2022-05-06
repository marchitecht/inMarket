import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/reducers/authReducer";

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        <div>
            <input 
            onChange={e => setEmail(prev => e.target.value)} 
            value={email} 
            type="email" 
            name="email" 
            id="" 
            placeholder="Введите email"/>
            <input 
            onChange={e => setPassword(prev => e.target.value)} 
            value={password} 
            type="password" 
            name="password" 
            id="" 
            placeholder="Введите password"/>
            <button 
            type="button"
            onClick={() => dispatch(login(email, password))}>
                Log in
            </button>
        </div>
    );
}

export default LoginForm;