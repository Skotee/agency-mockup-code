import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import * as Styled from "./styles";

export function DownArrow() {
  return (
    <Styled.ArrowContainer>
      <Styled.ArrowIcon>
        <ArrowDownwardIcon />
      </Styled.ArrowIcon>
    </Styled.ArrowContainer>
  );
}
