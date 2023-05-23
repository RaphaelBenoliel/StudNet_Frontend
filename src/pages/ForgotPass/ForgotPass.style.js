import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export const PageWrapper = styled.div`
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    text-align: center;
    margin-top: 75px;
    background-color: #0d1116;
    min-height: 120vh;
    flex-direction: column;
    justify-content: center;
`;

export const Title = styled.h1`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    font-size: 50px;
    color: #fff;
    margin: 10px;
    padding: 0;

`;

export const ForgotPassHolder = styled.div`
  background-color: rgba(200, 200, 200, 0.15);
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  width: 420px;
  height: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const CreateForgotPassContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const ForgotPassInput = styled.input`
  flex: 1;
  padding: 15px;
  width: 300px;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-right: 10px;
  background-color: rgba(200, 200, 200, 0.3);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ForgotPassButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  background: #238636;
  color: #fff;
  border-radius: 25px;
  border: none;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
  cursor: pointer;
`;
