import React from "react";

import Arrow from "../../assets/arrow.png";
import * as Styled from "./styles";

export function OurService(props) {
  const {title, description, isReversed} = props;

  return (
    <Styled.ServiceContainer isReversed={isReversed}>
      <div>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Details>{description}</Styled.Details>
        <div>
          <Styled.Link href="/">Learn More</Styled.Link>
          <span>
            <img src={Arrow} alt="Learn more" />
          </span>
        </div>
      </div>
    </Styled.ServiceContainer>
  );
}
