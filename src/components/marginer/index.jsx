import React from "react";

import * as Styled from "./styles";

function Marginer(props) {
  const {direction} = props;

  if (direction === "horizontal") return <Styled.HorizontalMargin {...props} />;
  else {
    return <Styled.VerticalMargin {...props} />;
  }
}

Marginer.defaultProps = {
  direction: "horizontal",
};

export {Marginer};
