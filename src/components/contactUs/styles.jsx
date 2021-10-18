import styled from "styled-components";
import FormControlLabel from "@mui/material/FormControlLabel";
import {Element} from "react-scroll";
import {theme} from "../../theme";
import {Button} from "../../components/button";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const StyledTextField = styled(TextField)`
  background-color: white;
  width: 400px;
  margin: 20px !important;

  @media screen and (max-width: 480px) {
    width: 300px;
  }
`;

const GridColumn = styled(Element)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GridRow = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const CheckboxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  color: white;
`;

const StyledButton = styled(Button)`
  border-radius: 20px;
  background-color: ${theme.secondary};
  color: white;
  font-weight: bold;
  outline: none;
  border: 2px solid ${theme.secondary};
  transition: all 220ms ease-in-out;
  cursor: pointer;
  height: 70px;
  width: 400px;
  margin-right: 20px;

  &:hover {
    color: ${theme.secondary};
    background-color: #fff;
    border: 2px solid ${theme.secondary};
  }

  @media screen and (max-width: 900px) {
    width: 400px;
    margin: 0 auto;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    margin: 0 auto;
  }
`;

export {
  StyledTextField,
  GridColumn,
  GridRow,
  CheckboxContainer,
  StyledFormControlLabel,
  StyledButton,
};
