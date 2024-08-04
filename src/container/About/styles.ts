import { styled } from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  background-color: #191825;
  height: 100vh;
  color: ${colors.text};
  padding: 80px 0;
`;

export const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const SectionAbout = styled.div`
  p {
    margin: 32px 0;
  }
`;

export const Button = styled.a`
  max-width: 180px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.5em 0.8em 1.2em;
  color: ${colors.text};
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

  &:hover {
    box-shadow: 0 0.5em 1.5em -0.5em #4d36d0be;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em #4d36d0be;
  }
`;

export const Section = styled.div`
  text-align: center;

  img {
    border-radius: 50%;
    max-width: 260px;
    width: 100%;
  }

  h3 {
    margin: 12px 0;
    font-weight: 400;
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
