import React from "react";

import {Marginer} from "../marginer";
import Logo from "../../assets/logo3.png";
import * as Styled from "./styles";

export function Navbar({onOpen: handleOpenDialog}) {
  return (
    <Styled.NavbarContainer>
      <Styled.BrandContainer>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </Styled.BrandContainer>
      <Styled.AccessibilityContainer>
        <Marginer direction="horizontal" margin="8px" />
        <Styled.LoginButton variant="outlined" onClick={handleOpenDialog}>
          Login
        </Styled.LoginButton>
      </Styled.AccessibilityContainer>
    </Styled.NavbarContainer>
  );
}
