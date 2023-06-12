/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer,
  NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, SubmitBtn,
  OpenLinksButton, NavbarLinkExtended,
} from './Navbar.style';
import AccountMenu from './AccountMenu';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  // const [open, setOpen] = useState(false);
  const [auth, setAuth] = useState(null);
  const navigate = useNavigate();
  const signOut = () => {
    if (typeof window !== 'undefined') {
      localStorage.clear();
      setAuth(null); // Update auth state to null
      navigate('/');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const authData = localStorage.getItem('user');
      if (authData) {
        setAuth(authData);
        // navigate('/home'); // Redirect to home after setting auth
      } else {
        setAuth(null);
      }
    }
  }, [navigate]);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {auth ? (
              <>
                <NavbarLink to="/home"> Home</NavbarLink>
                <NavbarLink to="/profile"> Profile</NavbarLink>
                <NavbarLink to="/search">Search</NavbarLink>
                <NavbarLink to="/tools">Tools</NavbarLink>
                <NavbarLink to="/terms">Conditions & Terms</NavbarLink>
                <NavbarLink to="/about"> About</NavbarLink>
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
            <AccountMenu auth={auth} signOut={signOut} />
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
              <NavbarLinkExtended to="/search">Search</NavbarLinkExtended>
              <NavbarLinkExtended to="/tools">Tools</NavbarLinkExtended>
              <NavbarLinkExtended to="/terms">Conditions & Terms</NavbarLinkExtended>
              <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
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
