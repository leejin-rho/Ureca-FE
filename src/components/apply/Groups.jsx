import styled from '@emotion/styled';
import React from 'react';

export function InputGroup({ children }) {
  return <InputGroupContainer>{children}</InputGroupContainer>;
}

export function ButtonGroups({ children }) {
  return <ButtonGroupContainer>{children}</ButtonGroupContainer>;
}

const InputGroupContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ButtonGroupContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 12px;
`;
