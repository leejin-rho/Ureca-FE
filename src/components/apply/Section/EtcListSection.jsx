import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// React Icons
import {
  AiOutlineCalendar,
  AiOutlineDelete,
  AiOutlineLeft,
  AiOutlinePlus,
  AiOutlineRight,
} from 'react-icons/ai';
import { colors } from '../../../styles/colors';
import { TextField } from '../ui/InputFieldUi';
import Calendar from '../ui/Calendar';

export default function EtcListSection({
  header,
  listTitle,
  listItems,
  addListItem,
  handleInputChange,
  deleteListItems,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());

  // 각 listItem에 대해 DatePicker 상태를 관리하는 배열로 상태를 만듦
  const [datePickerVisibility, setDatePickerVisibility] = useState([]);

  // DatePicker 토글 함수
  const toggleDatePicker = (itemId, inputIdx) => {
    setDatePickerVisibility((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            inputs: item.inputs.map((input, idx) => {
              if (idx === inputIdx) {
                return {
                  ...input,
                  showDatePicker: !input.showDatePicker,
                };
              }
              return input;
            }),
          };
        }
        return item;
      }),
    );
  };

  useEffect(() => {
    setDatePickerVisibility(listItems);
  }, [listItems]);

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

        {listItems.map((item, itemIdx) => {
          return (
            <EtcListItemContainer key={item.id}>
              <EtcListItmes>
                {item.inputs.map((input, idx) => {
                  return (
                    <EtcListItme key={idx} readonly={input.disabled}>
                      {input.disabled ? (
                        <>
                          <input
                            className="text-input"
                            type={input.type}
                            placeholder={input.placeholder}
                            value={input.value}
                            name={input.name}
                            readOnly
                            onClick={() => toggleDatePicker(item.id, idx)}
                          />

                          <button
                            className="iconBtn"
                            onClick={() => toggleDatePicker(item.id, idx)}
                          >
                            {input.icons}
                          </button>

                          {/* 각 ListItem 별로 개별 DatePicker 관리 */}
                          {datePickerVisibility[itemIdx]?.inputs[idx]
                            .showDatePicker && (
                            <Calendar
                              changeValue={[
                                handleInputChange,
                                item.id,
                                input.name,
                              ]}
                              toggle={[toggleDatePicker, item.id, idx]}
                              selectedDate={selectedDate}
                              setSelectedDate={setSelectedDate}
                              year={year}
                              setYear={setYear}
                              month={month}
                              setMonth={setMonth}
                            />
                          )}
                        </>
                      ) : (
                        <input
                          className="text-input"
                          type={input.type}
                          placeholder={input.placeholder}
                          value={input.value}
                          name={input.name}
                          onChange={(event) =>
                            handleInputChange(
                              item.id,
                              input.name,
                              event.target.value,
                            )
                          }
                        />
                      )}
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
  position: relative;
  width: 19.975rem;
  background-color: #f4f6f9;
  border-radius: 0.8rem;
  border: 1px solid transparent;
  display: flex;

  .text-input {
    padding: 0.8rem 1.6rem;
    background-color: transparent;
    border: none;
    outline: none;
    flex-grow: 1;
    cursor: ${({ readonly }) => readonly && 'pointer'};
  }

  .iconBtn {
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

const DatePickerContainer = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};

  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const DatePicker = styled.div`
  display: ${({ show }) => (show ? 'block' : 'none')};

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  margin-top: 2px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  box-sizing: border-box;
  box-shadow: 0 0.5em 1em rgba(0, 0, 0, 0.2);

  button {
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background-color: transparent;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    transition: 0.3s;
  }

  .days,
  .dates {
    display: grid;
    grid-template-columns: repeat(7, 3.2rem);
    gap: 0.3rem;
    margin-block: 1rem;
  }

  .days span {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
  }

  .dates button {
    color: #708090;
    aspect-ratio: 1;
  }

  .dates button:disabled {
    color: rgba(112, 128, 144, 0.3);
  }

  .dates button:hover {
    background-color: rgba(119, 136, 153, 0.1);
  }

  .dates button.today {
    background-color: #e2007c26;
    color: #e2007e;
  }

  .dates button.selected {
    background-color: #e2007e;
    color: #fff;
  }
`;

const DatePickerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 0.1rem solid #eee;

  select {
    width: 10rem;
  }

  select,
  .year-input {
    font-size: 14px;
    border: 1px solid #eee;
  }

  .year-input {
    max-width: 6.4rem;
  }

  button {
    color: #708090;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  button:hover {
    color: #e2007e;
  }
`;
