import { Card } from "../../../shared/Styles";
import styled from "styled-components";
import AddIcon from "../../Icon/AddIcon";
import Table from "./_DataTable";
import { tableData } from "../../../data/tableData";
import { useState } from "react";
import DatePicker from "./_DatePicker";

const FileManagerCard = styled(Card)`
  min-height: 500px;
`;

const Header = styled.header`
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 173px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.color_Border};
  border-radius: 6px;
  border-bottom-left-radius: ${(props) => (props.isOpen ? "0px" : "6px")};
  border-bottom-right-radius: ${(props) => (props.isOpen ? "0px" : "6px")};
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  display: block;
  width: 100%;
  font-size: 12px !important;
  text-align: left;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  padding: 11px 16px;
  background-color: ${({ theme }) => theme.background_Secondary} !important;
`;

const ArrowIcon = styled.img<{ isOpen: boolean }>`
  position: absolute;
  right: 5px;
  top: 15px;
  cursor: pointer;
  width: 14px;
  height: 6px;
  transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "")};
`;

const DropdownMenu = styled.div`
  width: 173px;
  position: absolute;
  top: 100%;
  left: -1px;
  z-index: 20;
  display: none;
  background-color: ${({ theme }) => theme.background_Secondary} !important;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.12);
  border: 1px solid ${({ theme }) => theme.color_Border};
  border-top: none;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;

const DropdownOption = styled.div<{ isSelected: boolean }>`
  position: relative;
  font-size: 12px;
  font-weight: 500;
  padding: 8px;
  height: 34px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.4s ease;
  animation: ${(props) => (props.isSelected ? "optionAnim 0.2s" : "")};

  @keyframes optionAnim {
    0% {
      color: red;
    }
    100% {
      color: blue;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.background_HoverBlue};
    color: ${({ theme }) => theme.background_Secondary};
  }

  opacity: ${(props) => (props.isSelected ? "0" : "1")};
  padding: ${(props) => (props.isSelected ? "0" : "8px")};
  height: ${(props) => (props.isSelected ? "0" : "34px")};

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    left: -50%;
    background-color: #0000001f;
    height: 34px;
    width: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: #0000001f;
    height: 34px;
    width: 50%;
  }
`;

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "psd", label: "Photoshop" },
  { value: "pr", label: "Premiere Pro" },
  { value: "ai", label: "Illustrator" },
  { value: "fig", label: "Figma" },
  { value: "sketch", label: "Sketch" },
  { value: "id", label: "InDesign" },
];

const FileManager = () => {
  const [selectedOption, setSelectedOption] = useState<
    Option | null | undefined
  >(null);
  const [isOpen, setIsOpen] = useState(false);
  const [animationTrigger, setAnimationTrigger] = useState<Option | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: { value: string; label: string }) => {
    setSelectedOption(option);
    setAnimationTrigger(option);
    // setIsOpen(false);
  };

  return (
    <FileManagerCard>
      <Header>
        <h2>File manager</h2>
        <Right>
          <AddIcon />

          <DropdownContainer isOpen={isOpen}>
            <DropdownButton isOpen={isOpen} onClick={handleToggle}>
              <span>
                {`Sort by${
                  selectedOption ? ` : ${selectedOption.label}` : "..."
                }`}
              </span>
              <ArrowIcon
                isOpen={isOpen}
                src="/assets/Icon/ArrowDown.svg"
                alt="arrow-icon"
              />
            </DropdownButton>
            <DropdownMenu style={{ display: isOpen ? "block" : "none" }}>
              {options.map((option: Option) => (
                <DropdownOption
                  key={option.value}
                  isSelected={option === selectedOption ? true : false}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </DropdownOption>
              ))}
            </DropdownMenu>
          </DropdownContainer>
          <DatePicker />
        </Right>
      </Header>
      <Table data={tableData} filter={selectedOption?.value} />
    </FileManagerCard>
  );
};

export default FileManager;
