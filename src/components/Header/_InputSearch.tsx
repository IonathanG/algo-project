import { useState } from "react";
import styled from "styled-components";

const InputField = styled.input`
  width: 492px;
  height: 44px;
  padding-left: 72px;

  border: 1px solid #c3d4e9;
  border-radius: 70px;

  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;

  text-align: justify;
  letter-spacing: -0.02em;

  opacity: 0.8;
  transition: 0.3s ease-out;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-family: "Plus Jakarta Sans", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;

    text-align: justify;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.color_Font_Main};
  }
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 13px;
  left: 26px;
  z-index: 1;
`;

const Input = () => {
  const [search, setSearch] = useState("");

  return (
    <div style={{ position: "relative" }}>
      <Icon src="/assets/Icon/search-normal.svg" alt="search-icon" />
      <InputField
        name="search"
        type="text"
        placeholder="Search something here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </div>
  );
};

export default Input;
