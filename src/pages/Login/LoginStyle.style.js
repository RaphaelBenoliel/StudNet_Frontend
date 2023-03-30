import styled from "styled-components";


export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    padding: 50px;
    border: 2px solid black;
    align-items: center;
    justify-content: center;
    margin-top: 40%;
    gap: 10px;
    border-radius: 10px;
`

export const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    background-color: blue;
`

export const InputGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const Title = styled.h1``


export const InputLbl = styled.label`
    float: left;
`


export const SubmitBtn = styled.button`
    border: 1px solid black;
    border-radius: 15px;
    width: fit-content;
    padding: 10px;

    &:hover{
        cursor: pointer;
        background-color: darkslategrey;
        color: white;
    }
`

export const TextInput = styled.input`
    border: 1px solid black;
    border-radius: 15px;
    text-align: center;
`