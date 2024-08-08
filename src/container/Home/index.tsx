import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { BsEnvelopeAt } from "react-icons/bs";
import { CiDesktopMouse2 } from "react-icons/ci";
import { CgChevronDoubleDown } from "react-icons/cg";

import myPhoto from "../../assets/myPhoto.png";

import * as S from "./styles";

const Home = () => {
  
  return (
    <S.Container id="inicio">
      <S.ContainerHome className="container" data-aos="fade-right">
        <S.Presentation>
          <h2>Olá, meu nome é Breno!</h2>
          <p>Desenvolvedor FullStack</p>
          <S.Button>
            <a href="mailto:brenopereirabetti@gmail.com">Envie-me um email</a>
            <BsEnvelopeAt size={20} />
          </S.Button>
        </S.Presentation>
        <S.SectionFigures>
          <S.ContainerImage>
            <img src={myPhoto} alt="Foto de Breno Pereira" />
          </S.ContainerImage>
          <S.sectionIcons>
            <a href="https://github.com/brenopereira18" target="_blank">
              <AiFillGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/breno-pereira-betti/"
              target="_blank"
            >
              <FaLinkedinIn size={20} />
            </a>
          </S.sectionIcons>
        </S.SectionFigures>
      </S.ContainerHome>
      <S.Scroll>
        <CiDesktopMouse2 size={22} color="#7E8EF1" />
        <span>Scrool down</span>
        <CgChevronDoubleDown
          size={22}
          color="#615EFC"
          className="animated-icon"
        />
      </S.Scroll>
    </S.Container>
  );
};

export default Home;
