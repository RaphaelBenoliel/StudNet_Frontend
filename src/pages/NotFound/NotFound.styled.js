/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Body = styled.body`
    display: flex;
    flex-direction: column; 
    align-items: center;    
    background-color: #fff;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff; 
`;

export const Title = styled.h1`
    color: black;
    font-size: 100px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`;

export const Img = styled.img`
    width: 40%;
    height: 50%;
    position: absolute;
    
`;

export const STitle = styled.h3`
    color: black;
    font-size: 25px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

`;

export const NavbarLinkExtended = styled(Link)`
  color: #2da042;
  font-size: x-large;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  text-decoration: none;
  border: 2px solid #2da042;
  border-radius: 8px;
  background-color: #fff;
  margin: 10px;
  &:hover{
        cursor: pointer;
        color: #fff;
        border: 2px solid #238636;
        background-color: #238636;
    }
`;
