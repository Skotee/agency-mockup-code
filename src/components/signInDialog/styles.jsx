import {Element} from "react-scroll";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import {theme} from "../../theme";
import {Button} from "../../components/button";

const GridRow = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const StyledButton = styled(Button)`
  padding: ${({small}) => (small ? "5px 8px" : "13px 36px;")};
  border-radius: 40px;
  background-color: ${theme.primary};
  color: white;
  font-weight: bold;
  font-size: ${({small}) => (small ? "12px" : "16px")};
  outline: none;
  border: 2px solid white;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${theme.secondary};
    background-color: #fff;
    border: 2px solid ${theme.secondary};
  }
`;

const StyledTextField = styled(TextField)`
  background-color: white;
`;

export {GridRow, StyledButton, StyledTextField};
