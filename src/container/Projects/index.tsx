import Card from "../../components/Card";
import efood from "../../assets/efood.png";
import apiDjango from "../../assets/api-django.png";
import academyCode from "../../assets/api-academy_code.png";
import cars from "../../assets/cars.png";
import stockify from "../../assets/stockify.png";
import { Container, SectionProjects } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  {
    image: academyCode,
    name: "Academy Code",
    description:
      "Criei um gerenciador de cursos de programação que permite organizar e acessar conteúdos de forma prática e eficiente. O sistema conta com três tipos de usuários: 'manager', 'admin' e 'user', cada um com permissões específicas para garantir um controle claro e seguro. Ele oferece um CRUD completo para gerenciar tanto os cursos quanto os usuários e também possibilita filtrar os cursos por categoria, tornando a experiência mais ágil e personalizada.",
    technologies:
      "Java| Spring-Boot | Spring-Data | Spring-Security | PostgreSQL | JWT",
    github: "https://github.com/brenopereira18/academy_code",
  },
  {
    image: apiDjango,
    name: "Finance-api",
    description:
      "Uma API Django para gerenciamento financeiro, permite aos usuários registrar e monitorar suas finanças. É possivel filtrar transações de um mês específico e obter relatórios com a porcentagem de gastos por categoria, além da distribuição percentual de despesas, depósitos e investimentos. Existe o plano free, que permite até 10 transações por mês, e o plano premium com pagamento na Stripe, que oferece acesso ilimitado às funcionalidades.",
    technologies: "Django Rest-Framework | Python | PostgreSQL | Stripe | JWT",
    github: "https://github.com/brenopereira18/finance_api",
  },
  {
    image: stockify,
    name: "Stockify",
    description:
      "O Stockify é uma plataforma completa para gerenciamento de estoque, que permite a administração eficiente de produtos, marcas, fornecedores e categorias. A aplicação inclui funcionalidades avançadas como grupos de permissões de usuários, gráficos interativos e uma API pública para integração com outros sistemas.",
    technologies:
      "Python | Django | DRF | JWT | Bootstrap | PostgresSQL | Nginx | uWSGI",
    github: "https://github.com/brenopereira18/inventory_management",
  },
  {
    image: cars,
    name: "MultiCars",
    description:
      "Este projeto é um site de gerenciamento de veículos, onde o usuário pode se cadastrar e fazer login. Após estar conectado com sua conta o usuário pode criar cadastros de carros, ver detalhes, fazer atualizações e deletar (CRUD), além de conseguir buscar determinado carro pelo nome do modelo. A aplicação também conta com uma descrição automática através da API da Gemini, caso o usuário não coloque nenhuma. O deploy foi feito na AWS., com Nginx e uWSGI",
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
];

const Project = () => {
  return (
    <Container id="projetos">
      <div className="container">
        <h2>Projetos</h2>
        <SectionProjects>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            style={{ paddingBottom: "50px" }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.name}>
                <Card
                  key={project.name}
                  image={project.image}
                  name={project.name}
                  description={project.description}
                  technologies={project.technologies}
                  github={project.github}
                  deploy={project.deploy}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SectionProjects>        
      </div>
    </Container>
  );
};

export default Project;
