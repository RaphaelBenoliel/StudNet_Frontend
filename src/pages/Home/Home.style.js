import styled from 'styled-components';
import Mybackground from '../../icons/background2.png';
// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
    /* background-image: url(${Mybackground}); */
    background-repeat: no-repeat;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* height: 120vh; */
    background-size: cover;
    text-align: center;
    margin-top: 75px;
    background-color: #0d1116;
    /* display: flex; */
    /* position: fixed; */
    flex-direction: column;
    justify-content: center;
`;
export const STitle = styled.h3`
    color: #2da042;
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

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Post = styled.div`
  background-color: #fff;
  
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 10px;
  width: 400px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostContent = styled(STitle)`
  color: #333;
  margin-top: 10px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  word-break: break-word;
`;
export const UserPicture = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserDetails = styled.div`
display: flex;
align-items: center;
`;

export const DateContainer = styled.div`
flex-shrink: 0;
margin-left: 10px;
`;

export const CreatePostContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const PostInput = styled.input`
  flex: 1;
  padding: 15px;
  width: 300px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 10px;
`;

export const PostButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  background: #2196F3;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
