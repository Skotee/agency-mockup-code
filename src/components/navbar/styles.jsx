import styled from "styled-components";
import {Button} from "../../components/button";

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

export {NavbarContainer, BrandContainer, AccessibilityContainer, LoginButton};
