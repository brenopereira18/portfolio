import { styled } from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  background-color: ${colors.black};
  color: ${colors.text};
  padding: 20px 0;

  h2 {
    text-align: center;
    margin-bottom: 60px;
  }
`;

export const ListSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
