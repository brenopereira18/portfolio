import myPhoto from "../../assets/myPhoto.jpeg";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";
import * as S from "./styles";

const About = () => {
  return (
    <S.Container>
      <S.ContainerAbout className="container">
        <S.SectionAbout>
          <h2>Sobre mim</h2>
          <p>
            Sou um desenvolvedor fullstack com expertise em criar
            microsserviços, automatizar fluxos de trabalho e integrar front-end
            com back-end. Tenho experiência no desenvolvimento e testes com
            Django e Postgres, além de construir e consumir APIs robustas.
            Utilizo abordagens modernas de DevOps, como Docker e CircleCI, para
            garantir eficiência e qualidade nas entregas. Minhas habilidades
            também incluem a criação de landing pages atraentes e funcionais,
            utilizando as melhores práticas de design e desenvolvimento web.
            Essa combinação de competências permite a criação de soluções
            escaláveis e de alto desempenho, atendendo às necessidades
            específicas de cada projeto.
          </p>
          <S.Button>
            Baixar CV
            <BsDownload />
          </S.Button>
        </S.SectionAbout>
        <S.Section>
          <img src={myPhoto} alt="Foto de Breno Pereira" />
          <h3>Desenvolvedor Fullstack</h3>
          <S.ListIcons>
            <li>
              <a>
                <AiFillGithub size={32} />
              </a>
            </li>
            <li>
              <a>
                <AiFillLinkedin size={32} />
              </a>
            </li>
            <li>
              <a>
                <AiOutlineMail size={32} />
              </a>
            </li>
          </S.ListIcons>
        </S.Section>
      </S.ContainerAbout>
    </S.Container>
  );
};

export default About;
