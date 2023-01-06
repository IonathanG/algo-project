import styled from "styled-components";

const Icon = styled.div`
  cursor: pointer;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color_CTA};
  display: grid;
  place-items: center;

  div {
    /* z-index: 100; */
    position: relative;

    div {
      position: absolute;
      top: -1px;
      right: -6px;
      width: 12px;
      height: 2px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.background_Secondary};
    }

    div:nth-child(2) {
      transform: rotate(90deg);
      /* background-color: red; */
    }
  }
`;

const AddIcon = () => {
  return (
    <Icon>
      <div>
        <div></div>
        <div></div>
      </div>
    </Icon>
  );
};

export default AddIcon;
