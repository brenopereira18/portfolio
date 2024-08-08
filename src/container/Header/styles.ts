import { styled } from "styled-components";
import { colors } from "../../style";

export const HeaderContainer = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.text};
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease-in-out;

  &.scrolled {
    box-shadow: 0 2px 2px -2px gray;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.white};
`;

export const ItemsLink = styled.ul`
  display: flex;
  column-gap: 28px;

  a {
    font-weight: 500;
    cursor: pointer;
    color: ${colors.text};
    text-decoration: none;
    font-size: 13px;

    &:hover {
      color: #A084E8;
    }

    
  }
`;
