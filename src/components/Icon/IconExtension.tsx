import styled from "styled-components";
import IconName from "./model";

interface Props {
  name: IconName;
}

const Icon = styled.img`
  width: 22px;
  height: 22px;
`;

const IconExtension = (props: Props): any => {
  const { name } = props;

  return (
    <Icon
      src={`/assets/Image/Icon-application/${name}.png`}
      alt="icon-extension"
    />
  );
};

export default IconExtension;
