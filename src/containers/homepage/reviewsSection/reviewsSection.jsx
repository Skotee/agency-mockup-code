import React from "react";
import {Marginer} from "../../../components/marginer";
import {ReviewCard} from "../../../components/reviewCard";
import {SectionTitle} from "../../../components/sectionTitle";

import User1Img from "../../../assets/profile12.png";
import User2Img from "../../../assets/profile21.png";
import * as Styled from "./styles";

export function ReviewsSection() {
  return (
    <Styled.ReviewsContainer>
      <Marginer direction="vertical" margin="5em" />
      <SectionTitle>What clients are saying</SectionTitle>
      <Marginer direction="vertical" margin="5em" />
      <Styled.CardsContainer>
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
      </Styled.CardsContainer>
    </Styled.ReviewsContainer>
  );
}
