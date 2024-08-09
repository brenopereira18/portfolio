import { styled } from "styled-components";
import { colors } from "../../style";

export const CardContainer = styled.div`
  background: linear-gradient(135deg, #fffffff5, #3a4b8a, #ffffff98);
  padding: 1px;
  border-radius: 1.2rem;
  box-shadow: 0px 1rem 1.5rem -0.9rem #000000e1;
  max-width: 400px;
  width: 100%;

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 8px;
  }

  h3 {
    color: ${colors.white};
  }

  p {
    margin: 8px 0 16px 0;
  }

  h5 {
    color: ${colors.white};
  }

  span {
    font-weight: 400;
    color: ${colors.gray};
  }
`;

export const Container = styled.div`
  font-size: 1rem;
  color: ${colors.gray};
  background: linear-gradient(135deg, #0d1120 0%, #3a4b8a 43%, #0d1120 100%);
  padding: 1rem;
  border-radius: 1.2rem;
`;

export const SectionLinks = styled.ul`
  margin-top: 16px;
  display: flex;
  column-gap: 22px;

  li {
    padding: 8px 16px;
    border: 2px solid #2c2c2c;
    background-color: #1a1a1a;
    font-size: 0.8rem;
    cursor: pointer;
    border-radius: 30px;
    transition: all 0.4s ease;
    outline: none;
    position: relative;
    overflow: hidden;
    font-weight: bold;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(
        circle,
        rgba(255, 255, 255, 0.25) 0%,
        rgba(255, 255, 255, 0) 70%
      );
      transform: scale(0);
      transition: transform 0.5s ease;
      pointer-events: none;
    }

    &:hover::after {
      transform: scale(4);
    }

    &:hover {
      border-color: #666666;
      background: #292929;
    }
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    pointer-events: auto;
  }
`;
