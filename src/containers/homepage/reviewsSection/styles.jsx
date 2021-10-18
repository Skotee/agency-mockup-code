import styled from "styled-components";
import {Element} from "react-scroll";
import background3eyebrow from "../../../assets/background3eyebrow3.png";

const ReviewsContainer = styled(Element)`
  min-height: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${background3eyebrow}) no-repeat fixed padding-box content-box;
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

export {ReviewsContainer, CardsContainer};
