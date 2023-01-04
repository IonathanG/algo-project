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
  }
`;

const Input = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <InputField
        name="search"
        type="text"
        placeholder="Search something here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
    </>
  );
};

export default Input;
