
import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from './App'

export default function Home() {
  const history = useNavigate()
  const {login , setLogin} = useContext(userContext)
  useEffect(() => {
    if(login === false)
      history('/login')
  },[login])

  return (
    <div className='home'>
       <h1>home</h1> 
       <p>Hello </p>
      <NavLink to={'/login'}>log out</NavLink>
    </div>
  )
}
