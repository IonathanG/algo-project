import { useState } from "react";
import styled from "styled-components";
import IconName from "./model";

interface Props {
  isFavorite: boolean;
}

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

const IconFavorite = (props: Props): any => {
  const { isFavorite } = props;
  const [switchFavorite, setSwitchFavorite] = useState<boolean>(isFavorite);

  return (
    <div onClick={() => setSwitchFavorite((prevState) => !prevState)}>
      <Icon
        src={`/assets/Icon/${switchFavorite ? "Favorite" : "notFavorite"}.svg`}
        alt="icon-favorite"
      />
    </div>
  );
};

export default IconFavorite;
