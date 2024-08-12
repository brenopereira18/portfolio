import { styled } from "styled-components";
import { breakpoints, colors } from "../../style";

export const Container = styled.div`
  background-color: ${colors.darkBlue};
  color: ${colors.gray};
  padding: 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease-in-out;

  &.scrolled {
    box-shadow: 0 2px 2px -2px gray;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100vw;
  }
`;

export const ContainerHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.white};
`;

export const ItemsLink = styled.ul`
  display: flex;
  column-gap: 28px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }

  a {
    font-weight: 500;
    cursor: pointer;
    color: ${colors.gray};
    text-decoration: none;
    font-size: 14px;

    &:hover {
      color: #a084e8;
    }
  }
`;

export const MenuNav = styled.div`
  display: none;

  @media (max-width: ${breakpoints.mobile}) {
    display: block;
  }
`;

export const ItemsLinkMobile = styled.ul`
  display: none;
  position: fixed;
  top: 0; 
  left: 0;
  height: 60px; 
  width: 100%; 
  background-color: ${colors.darkBlue}; 
  padding: 10px;
  z-index: 1100; 
  transform: translateY(-100%);  /* Inicia fora da tela */
  transition: transform 0.3s ease-in-out; /* Transição suave */

  &.is-open {
    display: flex;
    justify-content: space-around;
    transform: translateY(0); /* Desce para a posição correta */
  }

  li {
    display: flex;
    align-items: flex-end;
    column-gap: 4px;
    font-weight: 500;
    color: ${colors.white};

    a {
      color: ${colors.white};
      text-decoration: none;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;
