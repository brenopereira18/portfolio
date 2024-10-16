import Card from "../../components/Card";
import efood from "../../assets/efood.png";
import cookinUp from "../../assets/cookin-up.png";
import cars from "../../assets/cars.png";
import stockify from "../../assets/stockify.png"
import { Container, SectionProjects } from "./styles";

const projects = [
  {
    image: stockify,
    name: "Stockify",
    description: "O Stockify é uma plataforma completa para gerenciamento de estoque, que permite a administração eficiente de produtos, marcas, fornecedores e categorias. A aplicação inclui funcionalidades avançadas como grupos de permissões de usuários, gráficos interativos e uma API pública para integração com outros sistemas. Obs: para acessar o sistema use usuário: userView / senha: view2001",
    technologies: "Python | Django | DRF | JWT | Bootstrap | AWS | PostgresSQL | Nginx | uWSGI",
    github: "https://github.com/brenopereira18/inventory_management",
    deploy: "http://3.220.238.18",
  },
  {
    image: cars,
    name: "MultiCars",
    description: "Este projeto é um site de gerenciamento de veículos, onde o usuário pode se cadastrar e fazer login. Após estar conectado com sua conta o usuário pode criar cadastros de carros, ver detalhes, fazer atualizações e deletar (CRUD), além de conseguir buscar determinado carro pelo nome do modelo. A aplicação também conta com uma descrição automática através da API da Gemini, caso o usuário não coloque nenhuma. O deploy foi feito na AWS., com Nginx e uWSGI",
    technologies: "Python | Django | AWS | PostgresSQL | Nginx | uWSGI",
    github: "https://github.com/brenopereira18/cars",
    deploy: "http://98.83.75.45/cars/",
  },
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
  {
    image: cookinUp,
    name: "Cookin-Up",
    description:
      "Este projeto é uma aplicação web que permite aos usuários selecionar os ingredientes que possuem em casa e, com base nessa seleção, sugere receitas que podem ser preparadas com esses ingredientes. Obs: Apenas alguns ingredientes possuem receita para demonstração, como 'ovos', 'leite', 'óleo', 'chocolate' ... ",
    technologies: "Typescript | VueJs | Html | Css",
    github: "https://github.com/brenopereira18/cookin-up",
    deploy: "https://cookin-up-green.vercel.app/",
  },  
];

const Project = () => {
  return (
    <Container id="projetos">
      <div className="container">
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
