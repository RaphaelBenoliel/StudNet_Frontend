import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
  background-color: black;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const BottonContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: blue;
    display: flex;
    flex-direction: column;    
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: monospace, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover{
        cursor: pointer;
        color: #2da042;
       
    }
`;
export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: monospace, sans-serif;
  text-decoration: none;
  margin: 10px;
  &:hover{
        cursor: pointer;
        color: #2da042;
    }
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const SubmitBtn = styled.button`
    margin: 18px;
    border: 1px solid #2da042;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    background-color: #238636;
    color:#fff;
    font-size: 16px;
    font-family: monospace, sans-serif;
    &:hover{
        cursor: pointer;
        background-color: #2da042;
    }
`;

export const TextAuth = styled.h1`
  font-size: 17px;
  font-family: monospace, sans-serif;
  color: #fff;
  text-align: center; /* Align the text to the center */
  letter-spacing: 2px; /* Add some letter spacing */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Apply a subtle text shadow */
  margin-top: 35px;
`;
