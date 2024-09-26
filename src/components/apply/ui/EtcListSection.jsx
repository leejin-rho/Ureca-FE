import React from 'react';
import styled from '@emotion/styled';

// React Icons
import { AiOutlinePlus } from 'react-icons/ai';
import { colors } from '../../../styles/colors';
import { TextField } from './InputFieldUi';

export default function EtcListSection({ header }) {
  return (
    <EtcListContainer>
      {/* 헤더 영역 */}
      <EtcListHeader>
        <EtcListHeaderTitle>{header}</EtcListHeaderTitle>
        <EtcListHeaderAddBtn>
          <AiOutlinePlus />
          <span>추가</span>
        </EtcListHeaderAddBtn>
      </EtcListHeader>

      {/* 콘텐츠 영역 */}
      <EtcListContent>
        {/* 콘텐츠 영역 - title */}
        <EtcListTitleContainer>
          <h2>자격증명</h2>
          <h2>자격등급</h2>
          <h2>취득일자</h2>
          <h2>인증기관</h2>
        </EtcListTitleContainer>

        {/* 콘텐츠 영역 - input */}
        <EtcListItemContainer>
          <EtcListItmes>
            <TextField />
            <TextField />
            <TextField />
            <TextField />
          </EtcListItmes>
          <EtcListBorderLine />
        </EtcListItemContainer>
      </EtcListContent>
    </EtcListContainer>
  );
}

const EtcListContainer = styled.div`
  font-family: 'Pretendard', sans-serif;

  & > * {
    box-sizing: border-box;
  }
`;

const EtcListHeader = styled.header`
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

const EtcListHeaderTitle = styled.h6`
  font-size: 18px;
  font-weight: 600;
`;

const EtcListHeaderAddBtn = styled.button`
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

const EtcListContent = styled.div`
  margin-top: 3.6rem;
`;

const EtcListTitleContainer = styled.div`
  display: flex;
  gap: 1.9rem;

  h2 {
    width: calc(100% / 4);
    color: #232527;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const EtcListItemContainer = styled.div``;

const EtcListItmes = styled.div`
  display: flex;
  gap: 1.9rem;
`;

const EtcListBorderLine = styled.div`
  height: 2px;
  background-color: #e9ebef;
  width: 100%;
  border-radius: 1px;
  margin: 2.4rem 0;
`;
