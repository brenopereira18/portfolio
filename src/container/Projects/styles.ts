import { styled } from "styled-components";
import { colors } from "../../style";

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.darkBlue};
  color: ${colors.gray};

  h2 {
    text-align: center;
    color: ${colors.white};
  }

  &::before {
    content: "";
    display: block;
    height: 100px;
    margin-top: -100px;
    visibility: hidden;
  }
`;

export const SectionProjects = styled.div`
  padding: 80px 0 120px 0;
  display: flex;
  justify-items: center;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background-color: #ccc; /* Cor cinza */
  }
`;

