import React from 'react';

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

// 커스텀 Select / Option
export function SelectedField() {
  return (
    <InputContainer>
      <InputLabelElement htmlFor="전공계열">전공계열</InputLabelElement>
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
