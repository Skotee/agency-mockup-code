import React from "react";
import Rating from "@mui/material/Rating";

import {Marginer} from "../marginer";
import * as Styled from "./styles";

export function ReviewCard(props) {
  const {
    reviewText,
    username,
    userImgUrl,
    userPosition,
    userCompany,
    lineWidth,
  } = props;

  return (
    <Styled.CardContainer>
      <Styled.InnerContainer>
        <Rating name="read-only" value={5} readOnly />
        <Marginer direction="vertical" margin="1em" />
        <Styled.ReviewText>{reviewText}</Styled.ReviewText>
        <Marginer direction="vertical" margin="1em" />
        <Styled.UserDetails>
          <Styled.UserImg src={userImgUrl} />
          <Styled.UserInnerContainer>
            <Styled.User>{username}</Styled.User>
            <Styled.UserDescription>
              {userPosition} at{" "}
              <Styled.UserCompany>{userCompany}</Styled.UserCompany>
            </Styled.UserDescription>
          </Styled.UserInnerContainer>
        </Styled.UserDetails>
      </Styled.InnerContainer>
      <Styled.Line style={{width: `${lineWidth}`}} />
    </Styled.CardContainer>
  );
}
