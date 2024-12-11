import { ListItems, StyledIcon } from "./styles";

type Props = {
  name: string;
  icon: React.ComponentType;
  color1: string;
  color2: string;
};

const Tag = ({ name, icon: Icon, color1, color2 }: Props) => {
  return (
    <ListItems color1={color1} color2={color2}>
      <div>
        <span></span>
        <li>
          <StyledIcon as={Icon} />
          <p>{name}</p>
        </li>
      </div>
    </ListItems>
  );
};

export default Tag;
