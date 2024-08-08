import { FaLinkedinIn } from "react-icons/fa6";
import { AiFillGithub } from "react-icons/ai";
import { BiEnvelope } from "react-icons/bi";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.ContainerFooter className="container">
        <div>
          <h2>Breno Pereira</h2>
          <p>Desenvolvedor FullStack</p>
        </div>
        <S.ContainerIcons>
          <S.Email>
            <BiEnvelope  size={26}/>
            <div>
              <span>Email</span>
              <p>brenopereirabetti@gmail.com</p>
            </div>
          </S.Email>
          <a
            href="https://www.linkedin.com/in/breno-pereira-betti/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/brenopereira18" target="_blank">
            <AiFillGithub />
          </a>
        </S.ContainerIcons>
      </S.ContainerFooter>
      <S.MadeByMe>By Breno Pereira</S.MadeByMe>
    </S.Container>
  );
};

export default Footer;
