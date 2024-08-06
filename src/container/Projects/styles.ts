import { styled } from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  background-color: ${colors.black};
  color: ${colors.text};

  h2 {
    text-align: center;
  }

  &::before {
    content: "";
    display: block;
    height: 100px; 
    margin-top: -100px; 
    visibility: hidden;
  }
`;

export const SectionProjects = styled.div`
  padding: 80px 0;
  display: flex;
  justify-content: space-around;
`;
