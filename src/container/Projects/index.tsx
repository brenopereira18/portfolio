import Card from "../../components/Card";
import efood from "../../assets/efood.png";
import { Container, SectionProjects } from "./styles";

const projects = [
  {
    image: efood,
    name: "Efood",
    description:
      "Desenvolvi a interface de um site para restaurantes proporcionando uma experiência de usuário fluida e eficiente. O projeto foi focado em criar uma plataforma intuitiva onde os restaurantes podem exibir seus menus e gerenciar pedidos online.",
    technologies:
      "Typescript | React | Redux | Styled-components | React-Router-Dom | React Toolkit Query",
    github: "https://github.com/brenopereira18/Efood",
    deploy: "https://efood-dun-beta.vercel.app/",
  },  
];

const Project = () => {
  return (
    <Container id="projetos">
      <div className="container" data-aos="fade-left">
        <h2>Projetos</h2>
        <SectionProjects>
          {projects.map((project) => (
            <Card
              key={project.name}
              image={project.image}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              github={project.github}
              deploy={project.deploy}
            />
          ))}
        </SectionProjects>
      </div>
    </Container>
  );
};

export default Project;
