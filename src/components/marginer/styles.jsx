import styled from "styled-components/macro";

const HorizontalMargin = styled.span`
  display: flex;
  width: ${({margin}) => (typeof margin === "string" ? margin : `${margin}px`)};
`;

const VerticalMargin = styled.span`
  display: flex;
  height: ${({margin}) =>
    typeof margin === "string" ? margin : `${margin}px`};
`;

export {HorizontalMargin, VerticalMargin};
