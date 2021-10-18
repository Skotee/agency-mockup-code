import React from "react";
import styled from "styled-components";

import { Button } from "../../components/button";
import { Marginer } from "../marginer";
import Logo from "../../assets/logo3.png";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BrandContainer = styled.div``;

const AccessibilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const LoginButton = styled(Button)`
  border-radius: 40px;
`;


export function Navbar ({
  onOpen: handleOpenDialog
}) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <a href ="/">
          <img src={Logo} alt='logo'/>
        </a>
      </BrandContainer>
      <AccessibilityContainer>
        <Marginer 
          direction="horizontal" 
          margin="8px" 
        />
        <LoginButton 
          variant="outlined"
          onClick={handleOpenDialog}
        >
          Login
        </LoginButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
