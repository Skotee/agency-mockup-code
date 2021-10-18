import styled from "styled-components";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({isReversed}) => isReversed && "row-reverse"};
  margin-bottom: 4em;
  width: 50vw;

  @media screen and (max-width: 800px) {
    width: 90vw;
  }

  @media screen and (max-width: 480px) {
    justify-content: center;
  }
`;

const Title = styled.h2`
  color: #000;
  font-size: 50px;
  font-weight: 700;
  margin: 5px 0;
  width: 500px;
  line-height: 1.2;

  @media screen and (max-width: 800px) {
    font-size: 40px;
    width: 340px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    margin-top: 1.5em;
    width: 300px;
  }
`;

const Details = styled.p`
  color: #b1aaaa;
  font-size: 21px;
  text-align: left;
  max-width: 77%;

  @media screen and (max-width: 480px) {
    font-size: 15px;
    width: 100%;
  }
`;

const Link = styled.a`
  text-transform: uppercase;
  margin-right: 10px;
  text-decoration: none;
  color: #000;
`;

export {ServiceContainer, Title, Details, Link};
