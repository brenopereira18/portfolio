import { styled } from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  padding: 48px 0;
  background-color: #8576ff;
`;

export const ContainerFooter = styled.div`
  display: flex;  
  justify-content: space-around;
  column-gap: 80px;
  color: ${colors.white};
  margin-bottom: 62px;

  h2 {
    margin-bottom: 8px;
  }

  p {
    font-size: 13px;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;

  a {
    color: ${colors.white};
    text-decoration: none;
    font-size: 24px;

    &:hover {
        color: ${colors.darkBlue};    
    }
  }
`;

export const MadeByMe = styled.p`
  font-size: 13px;
  color: ${colors.white};
  text-align: center;
`

export const Email = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;

  span {
    font-size: 14px;
    font-weight: 600;
  }
`
