import styled from 'styled-components';
import Mybackground from '../../icons/background2.png';
// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
    background-image: url(${Mybackground});
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 120vh;
    background-size: cover;
    text-align: center;
    margin-top: 75px;
    /* background-color: #0d1116; */
    /* display: flex; */
    /* position: fixed; */
    flex-direction: column;
    justify-content: center;
`;
export const STitle = styled.h2`
    color: white;
    font-family: monospace;
    text-align: center;
    margin: 8px 350px;
`;
export const Title = styled.h1`
    font-family: monospace, sans-serif;
    text-align: center;
    font-size: 50px;
    color: #fff;
    margin: 0;
    padding: 0;

`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
