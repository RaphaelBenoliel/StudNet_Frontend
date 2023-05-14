import styled from 'styled-components';

export const LoginContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    height: fit-content;
    width: fit-content;
    padding: 16px;
    border: 2px solid black;
    align-items: center;
    
    margin-top: 0%;
    gap: 16px;
    border-radius: 16px;
    background-color: white; */
    padding: 50px 20px;
    height: fit-content;
    border: 2px solid #21262d;
    border-radius: 6px;
    background-color: #161b22;
    gap: 10px;
    align-items: center;
    display: flex;
    flex-direction: column;
    
    
`;

export const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    height: 100vh;
    background-color: #0d1116;
`;

export const InputGrid = styled.div`
    display: block;
    grid-template-columns: 1fr 1fr;
    
`;

export const Title = styled.h1`
    
    color: #fff;
    line-height: 4;
    font-family: monospace, sans-serif;
`;

export const InputLbl = styled.label`
  font-size: 15px;
  color:#fff;
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
    text-align: left;
    margin-bottom: 8px;
    background-color: #0d1116;
    color: white;
`;
export const EyeLab = styled.label`
    font-size: 14px;
    font-family: monospace, sans-serif;
    align-self: end;
    color: rgb(45, 160, 66);
    align: right;
`;

export const TextMesasge = styled.h3`
  font-size: 12px;
  font-family: monospace, sans-serif;
  color: red;
`;
