import React from "react";

import * as Styled from "./styles";

export function Button(props) {
  return (
    <Styled.ButtonWrapper {...props}>{props.children}</Styled.ButtonWrapper>
  );
}
