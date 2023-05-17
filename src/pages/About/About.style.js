import styled from 'styled-components';
import Mybackground from '../../icons/background.jpg';
// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
    background-image: url(${Mybackground});
    height: 100vh;
    background-position: center;
    background-size: cover;
    /* align-items:center;
    text-align: center; */
    margin-top: 0px;
    
  
`;
export const STitle = styled.h2`
    color: black;
    font-family: monospace;
    text-align: center;
    margin: 8px 350px;
    color: white;
    font-family: fantasy;
`;
export const Title = styled.h1`
    font-family: monospace, sans-serif;
    font-size: 70px;
    color: #fff;
    margin: 0 0 20px;
    padding: 0;

`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
