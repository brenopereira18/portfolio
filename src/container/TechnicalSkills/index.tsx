import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,  
  IoLogoPython,
} from "react-icons/io";
import { IoLogoReact } from "react-icons/io5";
import {
  SiTypescript,
  SiBootstrap,  
  SiDocker,
  SiDjango,  
  SiSpring,
} from "react-icons/si";
import { FaGitAlt, FaJava } from "react-icons/fa";
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
  { name: "Docker", icon: SiDocker, color1: "#47B5FF", color2: "#1363DF" },
  { name: "Django", icon: SiDjango, color1: "#D3D04F", color2: "#005B41" },   
  { name: "Git", icon: FaGitAlt, color1: "#FFB84C", color2: "#F94C10" },
  { name: "Java", icon: FaJava, color1: "#78B3CE", color2: "#FF7F3E" },
  { name: "Spring", icon: SiSpring, color1: "#5D8736", color2: "#A9C46C" },
];

const TechnicalSkills = () => {
  return (
    <S.Container id="habilidades-tecnicas">
      <div className="container" data-aos="fade-right">
        <h2>Skills</h2>
        <p>Minhas tecnologias</p>
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
