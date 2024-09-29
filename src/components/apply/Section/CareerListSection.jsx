import React from 'react';
import styled from '@emotion/styled';

import { AiOutlinePlus } from 'react-icons/ai';
import { colors } from '../../../styles/colors';

function CareerListSection({ header, addListItem }) {
  return (
    <CareerListContainer>
      {/* 헤더 영역 */}
      <CareerListHeader>
        <CareerListHeaderTitle>{header}</CareerListHeaderTitle>
        <CareerListHeaderAddBtn onClick={addListItem}>
          <AiOutlinePlus />
          <span>추가</span>
        </CareerListHeaderAddBtn>
      </CareerListHeader>
    </CareerListContainer>
  );
}

const CareerListContainer = styled.div`
  font-family: 'Pretendard', sans-serif;

  & > * {
    box-sizing: border-box;
  }
`;

const CareerListHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1.2rem;
    display: block;
    height: 2px;
    background-color: #888;
    width: 100%;
    border-radius: 1px;
  }
`;

const CareerListHeaderTitle = styled.h6`
  font-size: 18px;
  font-weight: 600;
`;

const CareerListHeaderAddBtn = styled.button`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  background-color: transparent;
  border: none;
  cursor: pointer;

  svg {
    color: ${colors.primaryColor};
  }

  span {
    color: #000;
  }
`;

export default CareerListSection;
