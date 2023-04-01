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
            <NavbarLink to="/"> Home</NavbarLink>
            <NavbarLink to="/news"> News</NavbarLink>
            <NavbarLink to="/contact"> Contacts</NavbarLink>
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
          <NavbarLinkExtended to="/auth"><SubmitBtn> Login</SubmitBtn></NavbarLinkExtended>
          <NavbarLinkExtended to="/signUp"><SubmitBtn> SignUp</SubmitBtn></NavbarLinkExtended>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/news"> News</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact"> Contacts</NavbarLinkExtended>
          <NavbarLinkExtended to="/about"> About</NavbarLinkExtended>
        </NavbarExtendedContainer>

      )}
    </NavbarContainer>

  );
}

export default Navbar;
