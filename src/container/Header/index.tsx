import { useEffect, useState } from "react";
import { CgMenu, CgFileDocument } from "react-icons/cg";
import { BsPersonFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";
import * as S from "./styles";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

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
    <S.Container className={isScrolled ? "scrolled" : ""}>
      <S.ContainerHeader className="container">
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
        <S.MenuNav>
          <CgMenu
            size={26}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
            color="#a084e8"
          />
          <S.ItemsLinkMobile className={`${menuIsOpen ? "is-open" : ""} ${isScrolled ? "scrolled" : ""}`}>
            <li>
              <AiFillHome />
              <a href="#inicio">Home</a>
            </li>
            <li>
              <BsPersonFill />
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <CgFileDocument />
              <a href="#habilidades-tecnicas">Skills</a>
            </li>
            <li>
              <BsBriefcaseFill />
              <a href="#projetos">Projetos</a>
            </li>
          </S.ItemsLinkMobile>
        </S.MenuNav>
      </S.ContainerHeader>
    </S.Container>
  );
};

export default Header;
