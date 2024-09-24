import styled from '@emotion/styled';
import React from 'react';

function Input() {
  return (
    <InputContainer>
      <InputLabelTag htmlFor="name">이름</InputLabelTag>
      <InputTag type="text" name="name" id="name" />
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InputLabelTag = styled.label`
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 150%;
  color: #232527;
`;

const InputTag = styled.input`
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  background-color: #f4f6f9;
`;

export default Input;
