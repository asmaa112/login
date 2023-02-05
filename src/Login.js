import React, { useContext, useState}  from 'react'
import {  useNavigate } from 'react-router-dom'
import { userContext } from './App'


export default function Login() {
    const {login , setLogin} = useContext(userContext)
    const history = useNavigate()
    const [userName, setUsername] = useState('')
    const [password,setPassword] = useState('')
    const user = 'asmaa'
    const ps = '1234'
    const hundleLogin = () => {
        if(userName === user && password === ps)
        {
            setLogin(true)
            history('/')
        }
    }
    return (
        <div className='Login'>
            <h1>login</h1>
            <input type='text' placeholder='username' onChange={(e)=> setUsername(e.target.value)}/>
            <input type='text' placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={()=>hundleLogin()}>login</button>
        </div>
    )
}
