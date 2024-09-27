import React from 'react';
import styled from '@emotion/styled';

// React Icons
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlinePlus,
} from 'react-icons/ai';
import { colors } from '../../../styles/colors';
import { TextField } from './InputFieldUi';

export default function EtcListSection({
  header,
  listTitle,
  listItems,
  addListItem,
  handleInputChange,
  deleteListItems,
}) {
  return (
    <EtcListContainer>
      {/* 헤더 영역 */}
      <EtcListHeader>
        <EtcListHeaderTitle>{header}</EtcListHeaderTitle>
        <EtcListHeaderAddBtn onClick={addListItem}>
          <AiOutlinePlus />
          <span>추가</span>
        </EtcListHeaderAddBtn>
      </EtcListHeader>

      {/* 콘텐츠 영역 */}
      <EtcListContent>
        {/* 콘텐츠 영역 - title */}
        <EtcListTitleContainer>
          {listTitle &&
            listTitle.map((element, idx) => <h2 key={idx}>{element}</h2>)}
        </EtcListTitleContainer>

        {/* 콘텐츠 영역 - input */}

        {listItems.map((item) => {
          return (
            <EtcListItemContainer key={item.id}>
              <EtcListItmes>
                {item.inputs.map((input, idx) => {
                  return (
                    <EtcListItme key={idx} readonly={input.disabled}>
                      <input
                        type={input.type}
                        placeholder={input.placeholder}
                        value={input.value}
                        name={input.name}
                        readOnly={input.disabled}
                        onChange={(event) =>
                          handleInputChange(
                            item.id,
                            input.name,
                            event.target.value,
                          )
                        }
                      />

                      {input.icons && <button>{input.icons}</button>}
                    </EtcListItme>
                  );
                })}

                <button
                  className="deleteBtnIcon"
                  onClick={() => deleteListItems(item.id)}
                >
                  <AiOutlineDelete />
                </button>
              </EtcListItmes>

              <EtcListBorderLine />
            </EtcListItemContainer>
          );
        })}
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
  gap: 0.8rem;

  h2 {
    width: 19.975rem;
    color: #232527;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 8px;
  }
`;

const EtcListItemContainer = styled.div``;

const EtcListItmes = styled.div`
  display: flex;
  gap: 1rem;

  .deleteBtnIcon {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #b0b5bd;
    display: flex;
    align-items: center;
    font-size: 20px;

    :hover {
      color: red;
    }
  }
`;

const EtcListItme = styled.div`
  width: 19.975rem;
  background-color: #f4f6f9;
  border-radius: 0.8rem;
  border: 1px solid transparent;
  display: flex;
  position: relative;

  input {
    padding: 0.8rem 1.6rem;
    background-color: transparent;
    border: none;
    outline: none;
    flex-grow: 1;
    cursor: ${({ readonly }) => readonly && 'pointer'};
  }

  button {
    flex-grow: 1;
    height: 100%;
    border: none;
    background-color: transparent;
    font-size: 20px;
    color: #b0b5bd;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    cursor: ${({ readonly }) => readonly && 'pointer'};
  }
`;

const EtcListBorderLine = styled.div`
  height: 2px;
  background-color: #e9ebef;
  width: 100%;
  border-radius: 1px;
  margin: 2.4rem 0;
`;
