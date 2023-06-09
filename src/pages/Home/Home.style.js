import styled from 'styled-components';
// eslint-disable-next-line import/prefer-default-export
export const HomeWrapper = styled.div`
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    text-align: center;
    background-color: #0d1116;
    min-height: 120vh;
    flex-direction: column;
    justify-content: center;
`;
export const STitle = styled.h3`
    color: #2da042;
`;
export const Title = styled.h1`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    font-size: 30px;
    color: #fff;
    margin-top: 100px;
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
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: #fff;
`;

export const Post = styled.div`
  background-color: rgba(200, 200, 200, 0.15);
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 10px;
  width: 500px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PostContent = styled(STitle)`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
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
margin-left: -5px;
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
  width: 400px;
  border-radius: 15px;
  border: 1px solid #ccc;
  margin-right: 10px;
  background-color: rgba(200, 200, 200, 0.3);
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
`;

export const PostButton = styled.button`
  padding: 10px;
  margin-right: 10px;
  background: #238636;
  color: #fff;
  border-radius: 25px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 17px;
  border: none;
  cursor: pointer;
`;

export const CancelButton = styled.button`
padding: 5px;
/* margin-right: 10px; */
background-color: rgba(200, 200, 200, 0.3);
color: #fff;
border-radius: 15px;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
font-size: 15px;
border: none;
cursor: pointer;
margin-top: -28px;
margin-left: 50px;
`;

export const EditDeleteButton = styled.button`
  padding: 5px;
  /* margin-right: 10px; */
  background-color: rgba(200, 200, 200, 0.3);
  color: #fff;
  border-radius: 15px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 15px;
  border: none;
  cursor: pointer;
`;

export const PopDiv = styled.div`
  margin-left: 420px;
  flex-direction: column;
  margin-top: -20px;
`;
