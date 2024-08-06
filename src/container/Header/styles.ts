import { styled } from "styled-components";
import { colors } from "../../style";

export const HeaderContainer = styled.div`
  background-color: #2e3840;
  color: ${colors.text};
  padding: 16px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;   

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-family: "Playwrite BE VLG", cursive;

  span {
    font-family: "Playwrite BE VLG", cursive;
    color: #3abef9;
  }
`;

export const ItemsLink = styled.ul`
  display: flex;
  column-gap: 28px;

  a {
    font-weight: 500;
    cursor: pointer;
    color: ${colors.text};
    text-decoration: none;

    &:hover {
      border-bottom: 1px solid #ecfcff;
    }
  }
`;
