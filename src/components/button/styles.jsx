import styled from "styled-components";
import {theme} from "../../theme";

const ButtonWrapper = styled.button`
  padding: ${({small}) => (small ? "5px 8px" : "13px 36px;")};
  border-radius: 20px;
  background-color: transparent;
  color: #fff;
  font-weight: bold;
  font-size: ${({small}) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid white;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${theme.primary};
    border: 2px solid ${theme.primary};
  }
`;

export {ButtonWrapper};
