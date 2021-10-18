import React from "react";

import CountactUs from "../../../components/contactUs";
import {Marginer} from "../../../components/marginer";
import * as Styled from "./styles";

export function ContactUsSection() {
  return (
    <Styled.ContactUsContainer name="contactusSection">
      <Marginer direction="vertical" margin="12em" />
      <Styled.WhiteSectionTitle>Contact Us</Styled.WhiteSectionTitle>
      <CountactUs />
    </Styled.ContactUsContainer>
  );
}
