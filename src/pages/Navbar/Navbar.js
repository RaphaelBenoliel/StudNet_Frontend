import React, { useState } from 'react';
import {
  NavbarContainer, LeftContainer, RightContainer, NavbarInnerContainer,
  NavbarExtendedContainer, NavbarLinkContainer, NavbarLink, SubmitBtn,
  OpenLinksButton, NavbarLinkExtended,
} from './Navbar.style';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            {/* <NavbarLink to="/home"> Home</NavbarLink>
            <NavbarLink to="/profile"> Profile</NavbarLink>
            <NavbarLink to="/Search">Search</NavbarLink>
            <NavbarLink to="/tools">Tools </NavbarLink>
            <NavbarLink to="/terms">Conditions & Terms </NavbarLink> */}
            <NavbarLink to="/about"> About</NavbarLink>
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
          <NavbarLinkExtended to="/login"><SubmitBtn> Sign in</SubmitBtn></NavbarLinkExtended>
          <NavbarLinkExtended to="/signUp"><SubmitBtn> Sign up</SubmitBtn></NavbarLinkExtended>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          {/* <NavbarLink to="/home"> Home</NavbarLink>
            <NavbarLink to="/profile"> Profile</NavbarLink>
            <NavbarLink to="/Search">Search</NavbarLink>
            <NavbarLink to="/tools">Tools </NavbarLink>
            <NavbarLink to="/terms">Conditions & Terms </NavbarLink> */}
          <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
        </NavbarExtendedContainer>

      )}
    </NavbarContainer>

  );
}

export default Navbar;
