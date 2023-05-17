/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-parens */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InputLbl = styled.label`
  font-size: 16px;
  color:#fff;
  align-items: center;
  /* display: block; */
  /* margin-bottom: 8px; */
`;
export const EyeLab = styled.span`
    margin-left: 160px;
    cursor: pointer;

`;
export const LoginContainer = styled.div`
    
    padding: 20px 20px;
    /* height: fit-content; */
    border: 2px solid #21262d;
    border-radius: 6px;
    background-color: #161b22;
    gap: 1px;
    /* align-items: auto; */
    display: flex;
    flex-direction: column;
    margin-top: -50px;
    */
   ${InputLbl} {
    display: flex;
    align-items: center;
  }  
`;

export const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    background-color: #0d1116;
    background-image: 'url(./icons/background.jpg)';
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

// export const InputGrid = styled.div`
//     display: block;
//     grid-template-columns: 1fr 1fr;
// `;

export const Title = styled.h1`
    color: #fff;
    line-height: 4;
    font-family: monospace, sans-serif;
    margin-bottom: 30px;
    margin-top: -20px;
`;

export const SubmitBtn = styled.button`
    border: 1px solid #2da042;
    border-radius: 8px;
    width: 250px;
    height: 40px;
    padding: 10px;
    background-color: #238636;
    color:#fff;
    font-size: 15px;

    &:hover{
        cursor: pointer;
        background-color: #2da042;
    }
`;

export const TextInput = styled.input`
    border: 2px solid #21262d;
    width: 250px;
    height: 25px;
    border-radius: 5px;
    /* text-align: left; */
    align-items: left;
    margin-bottom: 8px;
    background-color: #0d1116;
    color: white;
`;

export const TextMesasge = styled.h3`
  font-size: 13px;
  font-family: monospace, sans-serif;
  font-style: italic;
  color: rgb(200 , 0, 0);
  text-align: left;
`;

export const NavLink = styled(Link)`
    color: #238636;
    text-decoration: none;
    &:hover{
        cursor: pointer;
        color: #2da042;
    }
`;
