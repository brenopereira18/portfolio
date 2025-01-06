import { BsDownload } from "react-icons/bs";
import * as S from "./styles";

const About = () => {
  return (
    <S.Container id="sobre">
      <h2>Sobre mim</h2>
      <S.ContainerAbout className="container">
        <S.Section>
          <iframe title="Homem mexendo no computador" src="https://lottie.host/embed/f74654dd-6f14-405a-9edd-bcb17520d4c1/uKetNZafbe.json"></iframe>
        </S.Section>
        <S.SectionAbout>
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
          <S.Button
            href="/CV/Curriculo_BrenoPereira.pdf"
            download="Curriculo_BrenoPereira.pdf"
          >
            Baixar CV
            <BsDownload />
          </S.Button>
        </S.SectionAbout>
      </S.ContainerAbout>
    </S.Container>
  );
};

export default About;
