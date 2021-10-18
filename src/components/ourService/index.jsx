
import React from "react";
import styled from "styled-components/macro";
import { Typography } from '@mui/material';

import Arrow from "../../assets/arrow.png";

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ isReversed }) => isReversed && "row-reverse"};
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
  color: #B1AAAA;
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

export function OurService(props) {
  const { title, description, isReversed } = props;

  return (
    <ServiceContainer isReversed={isReversed}>
      <div>
        <Title>{title}</Title>
        <Details>{description}</Details>
        <div>   
          <Link href ="/">   
              Learn More
          </Link>
            <span>
              <img src={Arrow} alt='Learn more'/>  
            </span>   

        </div>
      </div>
    </ServiceContainer>
  );
}
