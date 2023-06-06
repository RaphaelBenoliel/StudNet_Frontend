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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 30px;
  width: 300px;
  height: fit-content;
  border: 1px solid #21262d;
  border-radius: 10px;
  background-color: rgba(200, 200, 200, 0.2);
  margin: 0 auto;
  margin-top: 10px;
  ${InputLbl} {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
`;

export const VerticalContainer = styled.div`
    background-image: url(${Mybackground});
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    text-align: center;
    margin-top: -20px;
    background-color: #0d1116;
    min-height: 100vh;
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
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    /* margin-bottom: 5px; */
    margin-top: 100px;
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
    outline: none;
    font-size: 15px;

    &:hover{
        cursor: pointer;
        background-color: #2da042;
    }
`;

export const TextInput = styled.input`
    /* border: 2px solid #21262d;
    width: 100%;
    height: 25px;
    border-radius: 5px;
    align-items: left;
    margin-bottom: 3px;
    background-color: #0d1116;
    color: white; */
    border: 2px solid #21262d;
  width: 90%;
  height: 25px;
  border-radius: 5px;
  margin-bottom: 3px;
  background-color: #0d1116;
  color: white;
  padding: 5px 10px;
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  
  ::placeholder {
    color: #8c8c8c;
  }
  
  &:focus {
    border-color: #2ea043;
  }
`;

export const TextMesasge = styled.h3`
  font-size: 13px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
