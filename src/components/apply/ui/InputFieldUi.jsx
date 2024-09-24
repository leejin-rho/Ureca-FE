import React, { useState } from 'react';

import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { ButtonGroups } from '../Groups';

// 일반 Text 필드
export function TextField({ type, title, text, maxWidth }) {
  return (
    <InputContainer maxWidth={maxWidth}>
      <InputLabelElement htmlFor={title}>{text}</InputLabelElement>
      <InputElement type={type} name={title} id={title} />
    </InputContainer>
  );
}

// 일반 Button
export function Button({ title, type, buttons }) {
  return (
    <InputContainer>
      <InputLabelElement htmlFor={type}>{title}</InputLabelElement>
      <ButtonGroups>
        {buttons.length > 0 &&
          buttons.map((element) => (
            <ButtonElement key={element.id} value={element.value} id={type}>
              {element.text}
            </ButtonElement>
          ))}
      </ButtonGroups>
    </InputContainer>
  );
}

// 커스텀 Dropdown Menu

function Select({ menuShow, setMenuShow, selected }) {
  return (
    <SelectElement show={menuShow} onClick={() => setMenuShow(!menuShow)}>
      <span className="selected">{selected}</span>
      <CaretIcon show={menuShow} />
    </SelectElement>
  );
}

export function DropdownField({ options }) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const selectOption = (event) => {
    setSelected(event.target.textContent);
    setMenuShow(!menuShow);
  };

  return (
    <InputContainer>
      <InputLabelElement htmlFor="전공계열">전공계열</InputLabelElement>
      <DropdownElement>
        <Select
          menuShow={menuShow}
          setMenuShow={setMenuShow}
          selected={selected}
        />

        <DropdownMenu open={menuShow}>
          {options.map((option, idx) => {
            return (
              <DropdownMenuItem key={idx} onClick={selectOption}>
                {option}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenu>
      </DropdownElement>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => maxWidth};
  gap: 0.8rem;
`;

const InputLabelElement = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 150%;
  color: #232527;
`;

// Input 타입이 Button이 아닐 경우
const InputElement = styled.input`
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  background-color: #f4f6f9;
  transition: 0.4s;
  border: 1px solid transparent;
  outline: none;

  :focus {
    border: 1px solid ${colors.primaryColor};
  }
`;

// 버튼일 경우
const ButtonElement = styled.button`
  flex-grow: 1;
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  background-color: #f4f6f9;
  transition: 0.4s;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    border: 1px solid ${colors.primaryColor};
    background-color: rgba(241, 134, 181, 0.1);
  }
`;

// Select
const SelectElement = styled.div`
  background-color: #2a2f3b;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ show }) => (show ? '#26489a' : '#2a2f3b')};
  border-radius: 0.5em;
  padding: 1em;
  cursor: pointer;

  :hover {
    background-color: #323741;
  }
`;

const CaretIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #fff;
  transform: ${({ show }) => show && 'rotate(180deg)'};
`;

// Dropdown Menu
const DropdownElement = styled.div`
  min-width: 15em;
  position: relative;
  margin: 2em;

  & > * {
    box-sizing: border-box;
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0.2em 0.5em;
  background-color: #323741;
  border: 1px solid #363a43;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);
  border-radius: 0.5em;
  color: #9fa5b5;
  position: absolute;
  top: 3em;
  left: 50%;
  transform: translateX(-50%);
  opacity: ${({ open }) => (open ? 1 : 0)};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: 0.2s;
  z-index: 1;
  max-height: 13em;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #2a2d35;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #26489a;
  }
`;

const DropdownMenuItem = styled.li`
  padding: 0.7em 0.5em;
  margin: 0.3em 0;
  border-radius: 0.5em;
  cursor: pointer;
  text-align: left;

  :hover {
    background-color: #2a2d35;
  }
`;
