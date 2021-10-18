import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import CountactUs from "../../components/contactUs";
import { Marginer } from "../../components/marginer";
import background4mouth from "../../assets/background4mouth4.png";
import { SectionTitle } from "../../components/sectionTitle";

const ContactUsContainer = styled(Element)`
  width: 100%;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background:
    url(${background4mouth})    /* image */
    no-repeat                /* repeat */          
    padding-box              /* origin */
    content-box;              /* clip */    
  background-position: -25vw 10vw;
  background-size: 150%;

  @media screen and (max-width: 1200px) {
    height: 700px;
    background-position: -25vw 10vw;
  }

  @media screen and (max-width: 900px) {
    height: 1100px;
    background-size: 400%;
    background-position: -145vw 10vw;
  }

  @media screen and (max-width: 800px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    background-size: 500%;
    background-position: -200vw 10vw;
  }

  @media screen and (max-width: 400px) {
    background-size: 800%;
    background-position: -300vw 10vw;
  }
`;

const WhiteSectionTitle = styled(SectionTitle)`
  color: white;
`;

export function ContactUsSection() {
  return (
    <ContactUsContainer name="contactusSection">
      <Marginer direction="vertical" margin="12em" />
      <WhiteSectionTitle>Contact Us</WhiteSectionTitle>
      <CountactUs/>
    </ContactUsContainer>
  );
}
