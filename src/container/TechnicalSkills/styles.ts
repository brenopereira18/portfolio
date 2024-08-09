import { styled } from "styled-components";
import { breakpoints, colors } from "../../style";

export const Container = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.gray};
  padding-bottom: 160px;
  
  h2 {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 4px;
  }

  p {
    text-align: center;
    margin-bottom: 60px;
    font-size: 14px;
  }

  &::before {
    content: "";
    display: block;
    height: 100px;
    margin-top: -100px;
    visibility: hidden;
  }
`;

export const ListSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;     
  }

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
