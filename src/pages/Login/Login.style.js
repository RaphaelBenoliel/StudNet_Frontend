/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-parens */
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Mybackground from '../../icons/background2.png';

export const InputLbl = styled.label`
  font-size: 16px;
  color:#fff;
  align-items: center;
  display: block;
  margin-bottom: 5px;
`;
export const EyeLab = styled.span`
    margin-left: 60%;
    
    display: block;
    cursor: pointer;

`;
export const LoginContainer = styled.div`
    padding: 20px 30px;
    height: fit-content;
    width: 19%;
    border: 1px solid #21262d;
    border-radius: 10px;
    //background-color: #161b22;
    background-color: rgba(200, 200, 200, 0.2);
    gap: 1px;
    margin-left: 39%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-top: -20px;
   ${InputLbl} {
      display: flex;
  }
`;

export const VerticalContainer = styled.div`
    background-image: url(${Mybackground});
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 120vh;
    background-size: cover;
    text-align: center;
    margin-top: 19px;
    /* background-color: #0d1116; */
    /* display: flex; */
    /* position: fixed; */
    flex-direction: column;
    justify-content: center;
`;

// export const InputGrid = styled.div`
//     display: block;
//     grid-template-columns: 1fr 1fr;
// `;

export const Title = styled.h1`
    color: #fff;
    line-height: 3;
    font-family: monospace, sans-serif;
    margin-bottom: 5px;
    margin-top: -20px;
`;

export const SubmitBtn = styled.button`
    border: 1px solid #2da042;
    border-radius: 8px;
    width: fit-content;
    height: 40px;
    padding: 10px;
    margin-bottom: 10px;
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
    width: 100%;
    height: 25px;
    border-radius: 5px;
    /* text-align: left; */
    align-items: left;
    margin-bottom: 3px;
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
