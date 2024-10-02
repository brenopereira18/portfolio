import { styled } from "styled-components";
import { breakpoints } from "../../style";

export const ListItems = styled.ul<{ color1: string; color2: string }>`
  margin: 20px;
  div {
    position: relative;
    padding: 10px 20px;
    color: #fff;
    transition: 0.5s;

    &:hover {
      transform: translateY(-20px);

      @media (max-width: ${breakpoints.mobile}) {
        transform: translateY(0);
      }
    }

    &::before {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(
        45deg,
        ${(props) => props.color1},
        ${(props) => props.color2}
      );
      border-radius: 1.2em;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        45deg,
        ${(props) => props.color1},
        ${(props) => props.color2}
      );
      filter: blur(10px);
    }

    span {
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 2;
      border-radius: 1em;
    }

    li {
      position: relative;
      z-index: 10;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;

      p {
        margin: 0;
      }
    }
  }
`;

export const StyledIcon = styled.div`
  font-size: 28px;
  margin-right: 12px;
`;
