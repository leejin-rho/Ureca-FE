import React, { useState } from 'react';

import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { ButtonGroups, InputGroup } from '../Groups';
import { options } from '../../../assets/data/selectData';

// 일반 Text 필드
export function TextField({
  maxWidth,
  type,
  target,
  label,
  disabled,
  placeholder,
  value,
  changeEventFunc,
  group,
}) {
  return (
    <InputContainer maxWidth={maxWidth} group={group}>
      {!group && (
        <InputLabelElement htmlFor={target}>{label}</InputLabelElement>
      )}
      <InputElement
        type={type}
        name={target}
        id={target}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onChange={changeEventFunc}
      />
    </InputContainer>
  );
}

// 아이콘 Text 필드
export function TextFieldAndIcons({
  maxWidth,
  type,
  target,
  label,
  disabled,
  icons,
  modalOpenFunc,
  placeholder,
  value,
  onChange,
}) {
  return (
    <InputContainer maxWidth={maxWidth}>
      <InputLabelElement htmlFor={target}>{label}</InputLabelElement>

      <InputIconElement disabled={disabled} onClick={modalOpenFunc}>
        <InputElement
          type={type}
          name={target}
          id={target}
          placeholder={placeholder}
          readOnly={disabled}
          value={value}
          onChange={onChange}
        />
        <button>{icons}</button>
      </InputIconElement>
    </InputContainer>
  );
}

// 일반 Button
export function Button({
  title,
  type,
  buttons,
  setActiveBtn,
  setState,
  activeButton,
}) {
  return (
    <InputContainer>
      <InputLabelElement htmlFor={type}>{title}</InputLabelElement>
      <ButtonGroups>
        {buttons && buttons.length > 0 ? (
          buttons.map((element) => (
            <ButtonElement
              key={element.id}
              value={element.value}
              id={type}
              onClick={(event) => {
                setActiveBtn(element.id);
                setState(event.target.value);
              }}
              className={activeButton === element.id ? 'active' : ''}
            >
              {element.text}
            </ButtonElement>
          ))
        ) : (
          <ButtonElement>지원하기</ButtonElement>
        )}
      </ButtonGroups>
    </InputContainer>
  );
}

export function Submit({ buttons, onSubmitHandler, text }) {
  return (
    <InputContainer maxWidth={'100%'}>
      {buttons && buttons.length > 0 ? (
        <ButtonGroups>
          {buttons.map((element) => {
            return (
              <ButtonElement
                key={element.id}
                onClick={element.onSubmitHandler}
                className="submit"
                style={element.style}
              >
                {element.text}
              </ButtonElement>
            );
          })}
        </ButtonGroups>
      ) : (
        <ButtonElement onClick={onSubmitHandler}>{text}</ButtonElement>
      )}
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

export function DropdownField({
  label,
  group,
  data,
  setSelectValue,
  changeFunc,
}) {
  const [menuShow, setMenuShow] = useState(false);
  const [selected, setSelected] = useState(data[0]);

  const selectOption = (event) => {
    if (event.target.id.at(-1) !== '0') {
      setSelected(event.target.textContent); // 화면에 노출되는 상태 변환 함수

      if (changeFunc) {
        changeFunc[0](changeFunc[1], changeFunc[2], event.target.textContent);
      } else {
        setSelectValue(event.target.textContent); // props로 전달된 상태 변환 함수
      }
    }

    setMenuShow(!menuShow);
  };

  return (
    <InputContainer group={group}>
      {!group && <InputLabelElement>{label}</InputLabelElement>}
      <DropdownElement>
        <Select
          menuShow={menuShow}
          setMenuShow={setMenuShow}
          selected={selected}
        />

        <DropdownMenuOuter show={menuShow} onClick={() => setMenuShow(false)} />
        <DropdownMenu open={menuShow}>
          {data.map((option, idx) => {
            return (
              <DropdownMenuItem
                key={idx}
                id={option + '-' + idx}
                onClick={selectOption}
              >
                {option}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenu>
      </DropdownElement>
    </InputContainer>
  );
}

// 조합 index Field
export function CombInputField({
  label,
  scoreValue,
  setScoreValue,
  selectScoreItem,
}) {
  return (
    <InputContainer>
      <InputLabelElement>{label}</InputLabelElement>

      <InputGroup>
        <TextField
          group={true}
          value={scoreValue}
          changeEventFunc={(event) => setScoreValue(event.target.value)}
        />
        <span style={{ fontSize: 14 }}>/</span>
        <DropdownField
          target={'scroeList'}
          group={true}
          data={options.scroeList}
          setSelectValue={selectScoreItem}
        />
      </InputGroup>
    </InputContainer>
  );
}

export function TextAreaField({
  margin,
  maxWidth,
  label,
  elements,
  name,
  value,
  placeholder,
  areaHeight,
  onChange,
}) {
  return (
    <InputContainer margin={margin} maxWidth={maxWidth}>
      <InputLabelElement flex={elements}>
        {label ||
          elements.map((element, idx) => (
            <span key={idx} style={element.style}>
              {element.message}
            </span>
          ))}
      </InputLabelElement>

      <TextArea
        areaHeight={areaHeight}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : '416px')};
  gap: ${({ group }) => (group ? 0 : '8px')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`;

// input 태그 label
const InputLabelElement = styled.label`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  justify-content: ${({ flex }) => (flex ? 'space-between' : '')};
  align-items: ${({ flex }) => (flex ? 'end' : '')};
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  color: #232527;
`;

// input, icons 그룹
const InputIconElement = styled.div`
  display: flex;
  align-items: center;
  background-color: #f4f6f9;
  border-radius: 8px;
  border: 1px solid transparent;
  overflow: hidden;

  input {
    flex-grow: 1;
    cursor: ${({ disabled }) => disabled && 'pointer'};
  }

  input:focus {
    border: 1px solid transparent;
  }

  button {
    width: 50px;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b0b5bd;
    cursor: pointer;
  }
`;

// Input 타입이 Button이 아닐 경우
const InputElement = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
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
  width: 100%;
  padding: 8px 16px;
  border-radius: 8px;
  background-color: #f4f6f9;
  transition: 0.4s;
  border: 1px solid transparent;
  cursor: pointer;

  :hover {
    border: 1px solid ${colors.primaryColor};
    background-color: rgba(241, 134, 181, 0.1);
  }

  &.submit:hover {
    border: 1px solid transparent;
    background-color: #f4f6f9;
  }

  &.active {
    background-color: ${colors.primaryColor};
    color: #fff;
    box-shadow: 0 0.4rem 0.4rem rgba(211, 59, 77, 0.2);
    font-weight: 600;
  }
`;

// Select
const SelectElement = styled.div`
  background-color: #f4f6f9;
  /* color: #fff; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid
    ${({ show }) => (show ? colors.primaryColor : 'transparent')};
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;

  font-size: 13.3333px;
  line-height: normal;
`;

const CaretIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid #b0b5bd;
  transform: ${({ show }) => show && 'rotate(180deg)'};
`;

// Dropdown Menu
const DropdownElement = styled.div`
  min-width: 150px;
  position: relative;

  & > * {
    box-sizing: border-box;
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;
  padding: 2px 5px;
  /* background-color: #f4f6f9; */
  background-color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: #000;
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  opacity: ${({ open }) => (open ? 1 : 0)};
  display: ${({ open }) => (open ? 'block' : 'none')};
  transition: 0.2s;
  z-index: 1001;
  max-height: 130px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 7px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d5d8dd;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #acb0b6;
  }
`;

const DropdownMenuOuter = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const DropdownMenuItem = styled.li`
  padding: 8px 5px;
  margin: 3px 0;
  border-radius: 5px;
  cursor: pointer;
  text-align: left;

  font-size: 12px;
  line-height: normal;

  :hover {
    background-color: #b0b5bd1e;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 18px;
  height: ${({ areaHeight }) => areaHeight || '240px'};
  resize: none;
  background-color: #f4f6f9;
  border: 1px solid transparent;
  outline: none;
  border-radius: 8px;
  transition: 0.4s;

  :focus {
    border: 1px solid ${colors.primaryColor};
  }
`;
