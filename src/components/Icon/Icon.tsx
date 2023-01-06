import styled from "styled-components";
import IconName from "./model";

interface Props {
  name: IconName;
}

const MenuIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const Icon = (props: Props): any => {
  const { name } = props;

  return <MenuIcon src={`/assets/Icon/${name}.svg`} alt="menu-icon" />;
};

export default Icon;
