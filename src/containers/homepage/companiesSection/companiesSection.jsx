import React from "react";

import company1Img from "../../../assets/Cartoon_Network_logo.png";
import company2Img from "../../../assets/Booking_logo.png";
import company3Img from "../../../assets/Dropbox_logo.png";
import company4Img from "../../../assets/Toshiba_logo.png";
import company5Img from "../../../assets/slack.png";
import company6Img from "../../../assets/netflix-2.png";
import company7Img from "../../../assets/spotify-1.png";
import company8Img from "../../../assets/coca-cola.png";
import company9Img from "../../../assets/redbull.png";
import * as Styled from "./styles";

export function CompaniesSection() {
  return (
    <Styled.CompaniesContainer name="companiesSection">
      <Styled.CompaniesColumn>
        <Styled.CompaniesRow>
          <Styled.CompanyLogo src={company1Img} alt="Cartoon_Network_logo" />
          <Styled.CompanyLogo src={company2Img} alt="Booking_logo" />
          <Styled.CompanyLogo src={company3Img} alt="Dropbox_logo" />
        </Styled.CompaniesRow>
        <Styled.CompaniesRow>
          <Styled.CompanyLogo src={company4Img} alt="Toshiba_logo" />
          <Styled.CompanyLogo src={company5Img} alt="slack" />
          <Styled.CompanyLogo src={company6Img} alt="netflix" />
        </Styled.CompaniesRow>
        <Styled.CompaniesRow>
          <Styled.CompanyLogo src={company7Img} alt="spotify" />
          <Styled.CompanyLogo src={company8Img} alt="coca-cola" />
          <Styled.CompanyLogo src={company9Img} alt="redbull" />
        </Styled.CompaniesRow>
      </Styled.CompaniesColumn>
    </Styled.CompaniesContainer>
  );
}
