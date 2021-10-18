import styled from "styled-components";
import {Element} from "react-scroll";

const CompaniesContainer = styled(Element)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  margin-left: 150px;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const CompaniesColumn = styled(Element)`
  display: flex;
  flex-direction: column;
`;

const CompaniesRow = styled(Element)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 0;
  justify-content: space-between;
`;

const CompanyLogo = styled.img`
  padding: 0 40px;
`;

export {CompaniesContainer, CompaniesColumn, CompaniesRow, CompanyLogo};
