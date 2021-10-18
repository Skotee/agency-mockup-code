import styled from "styled-components";
import {Element} from "react-scroll";

import background2eye from "../../../assets/background2eye.png";

const Image = styled.img`
  position: absolute;

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Image1 = styled(Image)`
  left: 0px;
  top: 1350px;
  width: 28%;
  z-index: 1;
`;

const Image2 = styled(Image)`
  left: 94px;
  top: 1519px;
  width: 28%;
  z-index: 2;
`;

const Image3 = styled(Image)`
  right: 186px;
  top: 2100px;
  z-index: 1;
`;

const Image4 = styled(Image)`
  right: -14px;
  top: 1872px;
  z-index: 2;

  &:hover {
    transition-duration: 1s;
    transform: scale(1.1);
  }
`;

const GridRow = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ServiceContainer = styled(GridRow)`
  justify-content: space-around;
`;

const ServicesContainer = styled(Element)`
  width: 100%;
  height: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background: url(${background2eye}) no-repeat fixed padding-box content-box;
  background-position: -60vw -43vw;
  background-size: 200vw;

  @media screen and (max-width: 480px) {
    height: 900px;
  }
`;

export {
  Image1,
  Image2,
  Image3,
  Image4,
  GridRow,
  ServiceContainer,
  ServicesContainer,
};
