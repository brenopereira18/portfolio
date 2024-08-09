import { styled } from "styled-components";
import { breakpoints, colors } from "../../style";

export const Container = styled.div`
  background-color: ${colors.darkBlue};
  height: 100vh;
  color: ${colors.gray};
  padding: 100px 0 100px 0;

  @media (max-width: ${breakpoints.tablet}) {
    height: auto;
    padding: 80px 0 100px 0;
  }
`;

export const ContainerHome = styled.div`
  width: 100%;
  padding-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    row-gap: 32px;
  }
`;

export const Presentation = styled.div`
  h2 {
    font-size: 32px;
    color: ${colors.white};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 28px;
    }

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 24px;
    }
  }

  p {
    margin: 6px 0 30px 0;
    font-size: 18px;
    font-weight: 500;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 32px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-right: 10px;
    
  }
`;

export const Button = styled.div`
  max-width: 260px;
  width: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  column-gap: 12px;
  align-items: center;
  font-weight: 500;
  font-size: 17px;
  padding: 0.8em 1.2em 0.8em 1.2em;
  color: ${colors.white};
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

  a {
    color: ${colors.white};
    text-decoration: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    padding: 0.6em 1em;
  }
`;

export const Scroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 20px;
  }

  span {
    font-size: 13px;

    color: ${colors.white};
    margin-left: 4px;
  }

  .animated-icon {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

export const SectionFigures = styled.div`
  display: flex;
  align-items: center;
  column-gap: 42px;
`;

export const ContainerImage = styled.div`
  background-color: ${colors.purple};
  border-radius: 40% 40% 60% 40%;
  max-width: 360px;
  width: 100%;

  img {
    width: 90%;
  }
`;

export const sectionIcons = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  a {
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    color: ${colors.white};

    &:hover {
      color: ${colors.blue};
      transform: scale(1.4);
    }
  }
`;
