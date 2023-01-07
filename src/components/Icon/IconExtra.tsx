import styled from "styled-components";

const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.75px;
  padding: 5px;

  div {
    background-color: ${({ theme }) => theme.color_Font_SubMenu};
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
  }

  &:hover {
    div {
      background-color: ${({ theme }) => theme.color_CTA};
      transform: scale(1.4);
    }
    .first {
      transition: 0.4s ease;
    }
    .second {
      transition: 0.8s ease;
    }
    .third {
      transition: 1.2s ease;
    }
  }
`;

const IconExtra = () => {
  return (
    <Icon>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </Icon>
  );
};

export default IconExtra;
