import { useEffect, useState } from "react";
import * as S from "./styles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer className={isScrolled ? "scrolled" : ""}>
      <div className="container">
        <S.Title>Breno Pereira</S.Title>
        <S.ItemsLink>
          <li>
            <a href="#inicio">Home</a>
          </li>
          <li>
            <a href="#sobre">Sobre</a>
          </li>
          <li>
            <a href="#habilidades-tecnicas">Skills</a>
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
