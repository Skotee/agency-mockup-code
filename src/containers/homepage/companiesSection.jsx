import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";

import company1Img from "../../assets/Cartoon_Network_logo.png";
import company2Img from "../../assets/Booking_logo.png";
import company3Img from "../../assets/Dropbox_logo.png";
import company4Img from "../../assets/Toshiba_logo.png";
import company5Img from "../../assets/slack.png";
import company6Img from "../../assets/netflix-2.png";
import company7Img from "../../assets/spotify-1.png";
import company8Img from "../../assets/coca-cola.png";
import company9Img from "../../assets/redbull.png";

const CompaniesContainer = styled(Element)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  margin-left: 150px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const CompaniesColumn = styled(Element)`
  display: flex;
  flex-direction: column;
`;

const CompaniesRow = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 0;
  justify-content: space-between;
`;

const CompanyLogo = styled.img`
  padding: 0 40px;
`;

export function CompaniesSection() {
  return (
    <CompaniesContainer name="companiesSection">
      <CompaniesColumn>
        <CompaniesRow>
          <CompanyLogo src={company1Img} alt="Cartoon_Network_logo"/><CompanyLogo src={company2Img} alt="Booking_logo"/><CompanyLogo src={company3Img} alt="Dropbox_logo"/>
        </CompaniesRow>
        <CompaniesRow>
          <CompanyLogo src={company4Img} alt="Toshiba_logo"/><CompanyLogo src={company5Img} alt="slack"/><CompanyLogo src={company6Img} alt="netflix"/>
        </CompaniesRow>
        <CompaniesRow>
          <CompanyLogo src={company7Img} alt="spotify"/><CompanyLogo src={company8Img} alt="coca-cola"/><CompanyLogo src={company9Img} alt="redbull"/>
        </CompaniesRow>
      </CompaniesColumn>
    </CompaniesContainer>
  );
}
