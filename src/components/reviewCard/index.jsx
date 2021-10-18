import React from "react";
import styled from "styled-components";
import Rating from '@mui/material/Rating';

import { Marginer } from "../marginer";
import { Element } from "react-scroll";
import { theme } from "../../theme";

const CardContainer = styled.div`
  width: 350px;
  height: 288px;
  background-color: #fff;
  box-shadow: 0px 50px 99px #1F485D1A;
  border-radius: 3px;
  position: relative;
  margin: 25px;

  &:hover {
    transition-duration: 1s;
    transform: scale(1.15);
  }
`;

const InnerContainer = styled.div`
  padding: 10px 1.2em;
`;

const UserInnerContainer = styled(Element)`
  display: flex;
  flex-direction: column;
  line-height: 28px;
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #B1AAAA;
  font-weight: normal;
  display: flex;
  justify-content: center;
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 19px;
`;

const UserDescription = styled.span`
  font-size: 14px;
  font-weight: 300;
  color: #B1AAAA;
`;

const User = styled.span`
  color: #1E1C24;
  font-weight: bold;
  font-size: 16px;
`;

const UserCompany = styled(User)`
  font-size: 14px;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  height: 7px;
  background-color: ${theme.primary};
`;

export function ReviewCard(props) {
  const { reviewText, username, userImgUrl, userPosition, userCompany, lineWidth } = props;

  return (
    <CardContainer>
      <InnerContainer>
        <Rating name="read-only" value={5} readOnly />
        <Marginer direction="vertical" margin="1em" />
        <ReviewText>{reviewText}</ReviewText>
        <Marginer direction="vertical" margin="1em" />
        <UserDetails>
          <UserImg src={userImgUrl} />
          <UserInnerContainer>
            <User>{username}</User>
            <UserDescription>
              {userPosition} at <UserCompany>{userCompany}</UserCompany>
            </UserDescription>
          </UserInnerContainer>
        </UserDetails>
      </InnerContainer>
      <Line style={{width: `${lineWidth}`}}/>
    </CardContainer>
  );
}
