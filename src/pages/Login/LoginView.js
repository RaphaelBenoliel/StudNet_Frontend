import React, { useRef } from 'react'
import { InputLbl, LoginContainer, SubmitBtn, TextInput, Title, VerticalContainer } from './LoginStyle.style'


export default function LoginView(props) {

  const email = useRef(null);
  const password = useRef(null);

  const submitHandler = () => {
    props.login(email.current.value, password.current.value)
  }  

  return (
    
    <VerticalContainer>
       <Title>Log in to StudNet</Title>
        <LoginContainer>
            <InputLbl>Email address</InputLbl>
            <TextInput ref={email}/>
            <InputLbl>Password</InputLbl>
            <TextInput ref={password}/>
            <SubmitBtn onClick={() => submitHandler()} >Log in</SubmitBtn>
        </LoginContainer>
        
    </VerticalContainer>
    
  )
}
