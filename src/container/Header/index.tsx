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
            <a>Início</a>
          </li>
          <li>
            <a>Projetos</a>
          </li>
        </S.ItemsLink>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
