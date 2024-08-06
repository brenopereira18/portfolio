import { styled } from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  background-color: ${colors.black};
  color: ${colors.text};
  padding-bottom: 100px;

  h2 {
    text-align: center;
    margin-bottom: 60px;
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
`;
