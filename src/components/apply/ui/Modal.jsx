import React from 'react';
import styled from '@emotion/styled';
import { Text } from '../../global/Text';

function Modal() {
  return (
    <ModalExternalArea>
      <ModalContainer>
        <ModalHeader>
          <HeaderTitle>국적 검색</HeaderTitle>
        </ModalHeader>
        <ModalContent></ModalContent>
        <ModalFooter></ModalFooter>
      </ModalContainer>
    </ModalExternalArea>
  );
}

const ModalExternalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContainer = styled.div`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
`;

const ModalHeader = styled.div`
  padding: 2.5rem 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1``;

const ModalContent = styled.div``;

const ModalFooter = styled.div``;

export default Modal;
