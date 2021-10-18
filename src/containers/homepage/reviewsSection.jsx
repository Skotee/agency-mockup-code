import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { ReviewCard } from "../../components/reviewCard";
import { SectionTitle } from "../../components/sectionTitle";

import User1Img from "../../assets/profile12.png";
import User2Img from "../../assets/profile21.png";
import background3eyebrow from "../../assets/background3eyebrow3.png";

const ReviewsContainer = styled(Element)`
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:
    url(${background3eyebrow})    /* image */
     no-repeat                /* repeat */
     fixed                    /* attachment */
     padding-box              /* origin */
     content-box;              /* clip */   
  background-position: 70vw -14vw;
  background-size: 80vw;

  @media screen and (max-width: 1200px) {
    height: 1400px;
  }
`;

const CardsContainer = styled(Element)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export function ReviewsSection() {
  return (
    <ReviewsContainer>
      <Marginer direction="vertical" margin="5em" />
      <SectionTitle>What clients are saying</SectionTitle>
      <Marginer direction="vertical" margin="5em" />
      <CardsContainer>
        <ReviewCard
          reviewText='"This plugin is amazing with the current version, I can’t imagine it, how cool will it be when you finish the all"'
          username="Andre Smith"
          userImgUrl={User1Img}
          userPosition="CEO"
          userCompany="Pinterest"
          lineWidth="50%"
        />
        <ReviewCard
          reviewText='"This plugin is great with the previous version, I can’t imagine it, how amazing will it be when you finish the half"'
          username="Angela Michele"
          userImgUrl={User2Img}
          userPosition="CTO"
          userCompany="Facebook"
          lineWidth="50%"
        />
        <ReviewCard
          reviewText='"This plugin is lorem ipsum, I can’t imagine it, how amazing will it be when you finish the lorem"'
          username="Adam Wright"
          userImgUrl={User1Img}
          userPosition="EDO"
          userCompany="Twitter inc."
          lineWidth="100%"
        />
      </CardsContainer>
    </ReviewsContainer>
  );
}
