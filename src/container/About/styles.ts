import { styled } from "styled-components";
import { breakpoints, colors } from "../../style";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.darkBlue};
  color: ${colors.gray};
  padding-bottom: 120px;

  &::before {
    content: "";
    display: block;
    height: 100px;
    margin-top: -20px;
    visibility: hidden;
  }

  h2 {
    color: ${colors.white};
    text-align: center;
    margin-bottom: 80px;
  }
`;

export const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SectionAbout = styled.div`
  p {
    margin: 16px 0;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
      text-align: center;
    }

    @media (max-width: ${breakpoints.mobile}) {
      margin-bottom: 22px;
    }
  }
`;

export const Button = styled.a`
  color: ${colors.white};
  max-width: 180px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.2em 0.8em 1.2em;
  background: #ad5389;
  background: linear-gradient(
    0deg,
    rgba(77, 54, 208, 1) 0%,
    rgba(132, 116, 254, 1) 100%
  );
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em #4d36d0be;
  letter-spacing: 0.05em;
  border-radius: 20em;
  text-decoration: none;

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #4d36d0be;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em #4d36d0be;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    padding: 0.6em 1em 0.6em 1em;
    max-width: 160px;
    margin: 0 auto;
  }
`;

export const Section = styled.div`
  iframe {
    max-width: 400px;
    width: 100%;
    max-height: 300px;
    height: 100%;
    border: none;

    @media (max-width: ${breakpoints.mobile}) {
      height: 240px;
    }
  }
`;

export const ListIcons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 18px;

  li {
    cursor: pointer;
    position: relative;
    border-radius: 7px;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;

    &:hover {
      padding: 5px 10px;
      background: rgb(61, 106, 255);
      box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
      -webkit-transition: all 0.2s ease-out;
      -moz-transition: all 0.2s ease-out;
      transition: all 0.2s ease-out;
    }
  }
`;
