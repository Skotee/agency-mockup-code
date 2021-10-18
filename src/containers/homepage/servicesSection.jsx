import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { OurService } from "../../components/ourService";

import background2eye from "../../assets/background2eye.png";
import rankproj1 from "../../assets/rankproj1.png";
import earners2 from "../../assets/earners2.png";
import eth3 from "../../assets/eth3.png";
import slack4 from "../../assets/slack4.png";

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
  background:
    url(${background2eye})    /* image */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box;              /* clip */         
  background-position: -60vw -43vw;
  background-size: 200vw;

  @media screen and (max-width: 480px) {
    height: 900px;
  }
`;

export function ServicesSection() {
  return (
    <ServicesContainer name="servicesSection">
    <Marginer direction="vertical" margin="10em" />
      <GridRow>
        <Element>
          <Image1 src={rankproj1} alt='rankproj_banner'/>
          <Image2 src={earners2} alt='earners_banner'/>
        </Element>
        <OurService
          title="Why do you need application like this?"
          description="Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines."
          isReversed
        />
      </GridRow>
      <Marginer direction="vertical" margin="8em" />
      <ServiceContainer>
        <OurService
          title="Seamless Team Workflow & Efficient Task Management"
          description="Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines."
        />
        <Element>
          <Image3 src={eth3} alt='eth_banner'/>
          <Image4 src={slack4} alt='slack_banner'/>
        </Element>
      </ServiceContainer>
      <Marginer direction="vertical" margin="8em" />
    </ServicesContainer>
  );
}
