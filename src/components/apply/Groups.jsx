import styled from '@emotion/styled';
import React from 'react';

export function InputGroup({ children }) {
  return <InputGroupContainer>{children}</InputGroupContainer>;
}

export function ButtonGroups({ center, children }) {
  return (
    <ButtonGroupContainer center={center}>{children}</ButtonGroupContainer>
  );
}

const InputGroupContainer = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

const ButtonGroupContainer = styled.div`
  flex-grow: 1;
  display: flex;
  gap: 12px;
  justify-content: ${({ center }) => (center ? 'center' : '')};
`;
