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
  left: 0;
  width: 100%;
  background-color: ${colors.lightPurple};
  padding: 20px 10px;
  margin-top: 6px;
  font-size: 20px;
  transition: background 0.3s ease-in-out;

  &.scrolled {
    box-shadow: 0 2px 2px -2px gray;
  }

  &.is-open {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 18px;    
    transition: transform 0.5s ease-in-out;
  }

  div {
    margin-bottom: 8px;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 2px;
    font-weight: 500;
    color: ${colors.darkBlue};

    a {
      color: ${colors.darkBlue};
      text-decoration: none;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
