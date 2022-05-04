import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            <button type="button">Log in</button>
        </div>
    );
}

export default LoginForm;