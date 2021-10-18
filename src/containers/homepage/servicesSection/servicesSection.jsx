import React from "react";
import {Element} from "react-scroll";
import {Marginer} from "../../../components/marginer";
import {OurService} from "../../../components/ourService";

import rankproj1 from "../../../assets/rankproj1.png";
import earners2 from "../../../assets/earners2.png";
import eth3 from "../../../assets/eth3.png";
import slack4 from "../../../assets/slack4.png";
import * as Styled from "./styles";

export function ServicesSection() {
  return (
    <Styled.ServicesContainer name="servicesSection">
      <Marginer direction="vertical" margin="10em" />
      <Styled.GridRow>
        <Element>
          <Styled.Image1 src={rankproj1} alt="rankproj_banner" />
          <Styled.Image2 src={earners2} alt="earners_banner" />
        </Element>
        <OurService
          title="Why do you need application like this?"
          description="Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines."
          isReversed
        />
      </Styled.GridRow>
      <Marginer direction="vertical" margin="8em" />
      <Styled.ServiceContainer>
        <OurService
          title="Seamless Team Workflow & Efficient Task Management"
          description="Do you waste time organizing sticky notes, searching your email and apps for to-dos, and figuring out what to work on first? Then you need one solution to prioritize your tasks, manage your time, and meet your deadlines."
        />
        <Element>
          <Styled.Image3 src={eth3} alt="eth_banner" />
          <Styled.Image4 src={slack4} alt="slack_banner" />
        </Element>
      </Styled.ServiceContainer>
      <Marginer direction="vertical" margin="8em" />
    </Styled.ServicesContainer>
  );
}
