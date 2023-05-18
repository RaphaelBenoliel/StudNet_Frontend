/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer,
  NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, SubmitBtn,
  OpenLinksButton, NavbarLinkExtended, TextAuth,
} from './Navbar.style';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [auth, setAuth] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      if (authData) {
        setAuth(authData);
        history('/home'); // Redirect to home after setting auth
      }
    }
  }, [history]);

  const signOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      setAuth(null); // Update auth state to null
      history('/');
    }
  };
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {auth ? (
              <>
                <NavbarLink to="/home"> Home</NavbarLink>
                <NavbarLink to="/profile"> Profile</NavbarLink>
                <NavbarLink to="/Search">Search</NavbarLink>
                <NavbarLink to="/tools">Tools</NavbarLink>
                <NavbarLink to="/terms">Conditions & Terms</NavbarLink>
              </>
            ) : (
              <NavbarLink to="/about"> About</NavbarLink>
            )}
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          {auth ? (
            <>
              <TextAuth>
                {JSON.parse(auth).firstName}
                &nbsp;
                {JSON.parse(auth).lastName}
              </TextAuth>
              <NavbarLinkExtended onClick={signOut} to="/">
                <SubmitBtn>Sign out</SubmitBtn>
              </NavbarLinkExtended>
            </>
          ) : (
            <>
              <NavbarLinkExtended to="/"><SubmitBtn> Sign in</SubmitBtn></NavbarLinkExtended>
              <NavbarLinkExtended to="/signup"><SubmitBtn> Sign up</SubmitBtn></NavbarLinkExtended>
            </>
          )}
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {auth ? (
            <>
              <NavbarLinkExtended to="/home"> Home</NavbarLinkExtended>
              <NavbarLinkExtended to="/profile"> Profile</NavbarLinkExtended>
              <NavbarLinkExtended to="/Search">Search</NavbarLinkExtended>
              <NavbarLinkExtended to="/tools">Tools</NavbarLinkExtended>
              <NavbarLinkExtended to="/terms">Conditions & Terms</NavbarLinkExtended>
            </>
          ) : (
            <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
          )}
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}
export default Navbar;
