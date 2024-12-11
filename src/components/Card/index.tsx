import * as S from "./styles";

type Props = {
  image: string;
  name: string;
  description: string;
  technologies: string;
  github: string;
  deploy: string;
};

const Card = ({
  image,
  name,
  description,
  technologies,
  github,
  deploy,
}: Props) => {
  return (
    <S.CardContainer>
      <S.Container>
        <img src={image} />
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <h5>
            Técnologias: <span>{technologies}</span>
          </h5>
        </div>
        <S.SectionLinks>
          <li>
            <a href={github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a href={deploy} target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          </li>          
        </S.SectionLinks>
      </S.Container>
    </S.CardContainer>
  );
};

export default Card;
