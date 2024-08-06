import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <div className="container">
        <S.Title>
          Breno<span>Pereira</span>
        </S.Title>
        <S.ItemsLink>
          <li>
            <a href="#inicio">Início</a>
          </li>
          <li>
            <a href="#habilidades-tecnicas">Habilidades técnicas</a>
          </li>
          <li>
            <a href="#projetos">Projetos</a>
          </li>
        </S.ItemsLink>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
