import React from 'react'
import { sendLoginRequest } from '../../API/Auth_calls'
import LoginView from './LoginView'

export default function Login() {

  const login = async (email, password) => {
     console.log(`EMAIL:\t${email}\nPASSWORD:\t${password}`)
    await sendLoginRequest({
      email: email,
      password: password
    })
  }
  return (
    <LoginView
      login={login}
    />
  )
}
