import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoSass,
  IoLogoPython,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  SiTypescript,
  SiBootstrap,
  SiGrunt,
  SiDocker,
  SiJquery,
  SiDjango,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { FaGulp, FaGitAlt } from "react-icons/fa";
import * as S from "./styles";
import Tag from "../../components/Tag";

const skills = [
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color1: "#FDFFC2",
    color2: "#FFC700",
  },
  { name: "HTML5", icon: IoLogoHtml5, color1: "#ffbc00", color2: "#ff0058" },
  { name: "CSS3", icon: IoLogoCss3, color1: "#47B5FF", color2: "#1363DF" },
  { name: "Sass", icon: IoLogoSass, color1: "#FFB5DA", color2: "#FF3EA5" },
  { name: "Python", icon: IoLogoPython, color1: "#47B5FF", color2: "#1363DF" },
  { name: "React", icon: IoLogoReact, color1: "#A6F6FF", color2: "#6499E9" },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color1: "#47B5FF",
    color2: "#1363DF",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color1: "#D4ADFC",
    color2: "#9336B4",
  },
  { name: "Grunt", icon: SiGrunt, color1: "#FFC700", color2: "#F57D1F" },
  { name: "Docker", icon: SiDocker, color1: "#47B5FF", color2: "#1363DF" },
  { name: "jQuery", icon: SiJquery, color1: "#E3F6FF", color2: "#1363DF" },
  { name: "Django", icon: SiDjango, color1: "#D3D04F", color2: "#005B41" },
  { name: "Redux", icon: SiRedux, color1: "#836FFF", color2: "#6420AA" },
  {
    name: "Styled Components",
    icon: SiStyledcomponents,
    color1: "#F8F988",
    color2: "#FFA3FD",
  },
  { name: "Gulp", icon: FaGulp, color1: "#B3005E", color2: "#FF004D" },
  { name: "Git", icon: FaGitAlt, color1: "#FFB84C", color2: "#F94C10" },
];

const TechnicalSkills = () => {
  return (
    <S.Container>
      <div className="container">
        <h2>Técnologias</h2>
        <S.ListSkills>
          {skills.map((skill) => (
            <Tag
              icon={skill.icon}
              name={skill.name}
              color1={skill.color1}
              color2={skill.color2}
            />
          ))}
        </S.ListSkills>
      </div>
    </S.Container>
  );
};

export default TechnicalSkills;
