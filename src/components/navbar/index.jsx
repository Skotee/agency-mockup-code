import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";
import { Logo } from "../logo";
import { Marginer } from "../marginer";

const NavbarContainer = styled.div`
  width: 100%;
  height: 50px;
  padding: 0 2em;
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
  border-radius: 20px;
`;


export function Navbar(props) {
  return (
    <NavbarContainer>
      <BrandContainer>
        <Logo inline />
      </BrandContainer>
      <AccessibilityContainer>
        <Marginer direction="horizontal" margin="8px" />
        <LoginButton variant="outlined">Login</LoginButton>
      </AccessibilityContainer>
    </NavbarContainer>
  );
}
