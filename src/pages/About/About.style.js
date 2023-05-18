import styled from 'styled-components';
import Mybackground from '../../icons/background2.png';
// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
    /* background-image: url(${Mybackground});
    background-position: center;
    background-size: cover;
    text-align: center;
    margin-top: 0px;
    background-attachment: fixed;
    background-repeat: no-repeat; */
    background-image: url(${Mybackground});
    background-position: center;
    background-size: cover;
    text-align: center;
    margin-top: 0px;
    background-attachment: scroll;
    background-repeat: no-repeat;
    min-height: 100vh; /* Use min-height instead of a fixed height */
    text-align: center;
    margin-top: 0;
`;
export const STitle = styled.h2`
    color: black;
    font-family: monospace;
    text-align: center;
    margin: 3px 150px;
    color: white;
    //font-family: fantasy;
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
