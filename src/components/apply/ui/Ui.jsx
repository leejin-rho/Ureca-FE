import React from 'react';

import styled from '@emotion/styled';
import { colors } from '../../../styles/colors';
import { ButtonGroups } from '../Groups';

export function Input({ type, title, text, maxValue }) {
  return (
    <InputContainer maxValue={maxValue}>
      <InputLabelElement htmlFor={title}>{text}</InputLabelElement>
      <InputElement type={type} name={title} id={title} />
    </InputContainer>
  );
}

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

const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  max-width: ${({ maxValue }) => maxValue};
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
