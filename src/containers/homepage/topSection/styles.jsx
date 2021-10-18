import styled from "styled-components";
import TextField from "@mui/material/TextField";
import {Element} from "react-scroll";

import {Button} from "../../../components/button";
import {theme} from "../../../theme";
import background1circles from "../../../assets/background1circles.png";

const StyledButton = styled(Button)`
  border-radius: 40px;
  background-color: ${theme.primary};
  color: white;
  font-weight: bold;
  outline: none;
  border: 2px solid white;
  transition: all 220ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${theme.secondary};
    background-color: #fff;
    border: 2px solid ${theme.primary};
  }
`;

const Image = styled.img`
  position: absolute;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Image1 = styled(Image)`
  right: 94px;
  top: 100px;
  width: 40%;
  z-index: 4;
  animation: spin 15s linear infinite;
  @keyframes spin {
    20% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(20deg);
    }
  }
`;

const Image2 = styled(Image)`
  right: 27px;
  top: 339px;
  width: 52%;
  z-index: 3;
`;

const Image3 = styled(Image)`
  right: 38px;
  top: 471px;
  width: 38%;
  z-index: 2;
  animation: spin 10s linear infinite;
  @keyframes spin {
    20% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(20deg);
    }
  }
`;

const Image4 = styled(Image)`
  position: absolute;
  right: 233px;
  top: 493px;
  width: 38%;
  z-index: 1;
`;

const GridColumn = styled(Element)`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

const GridRow = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 1350px;
  padding: 0;
  position: relative;
  background: url(${background1circles}) /* image */ no-repeat /* repeat */
    padding-box /* origin */ content-box; /* clip */
  background-position: 50vw -81vw;
  background-size: 150vw;

  @media screen and (max-width: 800px) {
    height: 850px;
  }

  @media screen and (max-width: 480px) {
    height: 700px;
  }
`;

const MotivationalText = styled.h1`
  font-size: 65px;
  font-weight: 700;
  line-height: 1.4;
  color: #000;
  margin: 0;
  text-align: left;

  @media screen and (max-width: 800px) {
    font-size: 45px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

const ExtraBold = styled.span`
  font-weight: 900;
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const StyledTextField = styled(TextField)`
  background-color: white;
  width: 350px;

  @media screen and (max-width: 1200px) {
    width: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 200px;
  }
`;

const StyledParagraph = styled.p`
  font-size: 21px;
  font-weight: 700;
  color: #b1aaaa;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export {
  StyledButton,
  Image1,
  Image2,
  Image3,
  Image4,
  GridColumn,
  GridRow,
  TopContainer,
  MotivationalText,
  ExtraBold,
  DownArrowContainer,
  StyledTextField,
  StyledParagraph,
};
