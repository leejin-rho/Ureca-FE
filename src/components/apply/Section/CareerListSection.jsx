import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { AiOutlineCalendar, AiOutlinePlus } from 'react-icons/ai';
import { colors } from '@/styles/colors';
import { TextAreaField, TextField, DropdownField } from '../ui/InputFieldUi';
import { options } from '@assets/data/selectData';
import Calendar from '../ui/Calendar';

function CareerListSection({
  header,
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
    <CareerListContainer>
      {/* 헤더 영역 */}
      <CareerListHeader>
        <CareerListHeaderTitle>{header}</CareerListHeaderTitle>
        <CareerListHeaderAddBtn onClick={addListItem}>
          <AiOutlinePlus />
          <span>추가</span>
        </CareerListHeaderAddBtn>
      </CareerListHeader>

      {/* 콘텐츠 영역 */}

      <CareerListContent>
        {listItems.map((item, itemIdx) => (
          <CareerListItemContainer key={item.id}>
            {itemIdx > 0 && (
              <CareerListItemDeleteBtnContainer>
                <button onClick={() => deleteListItems(item.id)}>X</button>
              </CareerListItemDeleteBtnContainer>
            )}

            <div style={{ display: 'flex', gap: '26px', marginBottom: '36px' }}>
              {item.inputs.slice(0, 2).map((input, idx) => {
                return (
                  <div key={idx} style={{ width: '100%' }}>
                    {input.type === 'text' && (
                      <TextField
                        label={input.label}
                        placeholder={input.placeholder}
                        value={input.value}
                        target={input.name + '-' + item.id}
                        changeEventFunc={(event) =>
                          handleInputChange(
                            item.id,
                            input.name,
                            event.target.value,
                          )
                        }
                      />
                    )}
                    {input.type === 'select' && (
                      <DropdownField
                        label={input.label}
                        data={options.careerType}
                        changeFunc={[handleInputChange, item.id, input.name]}
                        // setSelectValueㅌ
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{ display: 'flex', gap: '26px', marginBottom: '36px' }}>
              <div style={{ width: '100%' }}>
                <TextField
                  label={item.inputs[2].label}
                  placeholder={item.inputs[2].placeholder}
                  value={item.inputs[2].value}
                  target={item.inputs[2].name + '-' + item.id}
                  changeEventFunc={(event) =>
                    handleInputChange(
                      item.id,
                      item.inputs[2].name,
                      event.target.value,
                    )
                  }
                />
              </div>

              <div
                style={{
                  width: '100%',
                  maxWidth: '416px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <label
                  style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '150%',
                    color: '#232527',
                  }}
                >
                  업무기간
                </label>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {item.inputs.slice(3, 5).map((input, idx) => {
                    return (
                      <React.Fragment key={idx}>
                        <CareerListtItme>
                          <input
                            className="text-input"
                            placeholder={input.placeholder}
                            value={input.value}
                            name={input.name}
                            readOnly
                            onClick={() => toggleDatePicker(item.id, idx + 3)}
                          />

                          <button
                            className="iconBtn"
                            onClick={() => toggleDatePicker(item.id, idx + 3)}
                          >
                            <AiOutlineCalendar />
                          </button>

                          {datePickerVisibility[itemIdx]?.inputs[idx + 3]
                            .showDatePicker && (
                            <Calendar
                              changeValue={[
                                handleInputChange,
                                item.id,
                                input.name,
                              ]}
                              toggle={[toggleDatePicker, item.id, idx + 3]}
                              selectedDate={selectedDate}
                              setSelectedDate={setSelectedDate}
                              year={year}
                              setYear={setYear}
                              month={month}
                              setMonth={setMonth}
                            />
                          )}
                        </CareerListtItme>
                        {idx === 0 && (
                          <span style={{ margin: '0 9px', fontSize: 14 }}>
                            ~
                          </span>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <TextAreaField
                maxWidth={'100%'}
                elements={[
                  {
                    message: '담당업무',
                    style: {
                      width: 'calc(100% - 120px)',
                      wordBreak: 'keep-all',
                    },
                  },
                  {
                    message: `글자수 ${
                      item.inputs[5].value.length <= 500
                        ? item.inputs[5].value.length
                        : '500'
                    } / 500자`,
                    style: {
                      width: '120px',
                      color: '#888',
                      textAlign: 'end',
                    },
                  },
                ]}
                value={item.inputs[5].value}
                onChange={(event) => {
                  if (item.inputs[5].value.length <= 500)
                    handleInputChange(
                      item.id,
                      item.inputs[5].name,
                      event.target.value,
                    );
                  else {
                    handleInputChange(
                      item.id,
                      item.inputs[5].name,
                      event.target.value,
                    );
                    handleInputChange(
                      item.id,
                      item.inputs[5].name,
                      item.inputs[5].value.slice(0, 500),
                    );
                  }
                }}
                placeholder={'귀하의 담당 업무 내용을 입력해주세요.'}
              />

              <CareerListBorderLine />
            </div>
          </CareerListItemContainer>
        ))}
      </CareerListContent>
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

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -12px;
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
  gap: 6px;
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

const CareerListContent = styled.div`
  margin-top: 36px;
`;

const CareerListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CareerListBorderLine = styled.div`
  height: 2px;
  background-color: #e9ebef;
  width: 100%;
  border-radius: 1px;
  margin: 24px 0;
`;

const CareerListItemDeleteBtnContainer = styled.div`
  margin-bottom: 18px;
  display: flex;
  justify-content: end;

  & > button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 22px;
    height: 22px;
    border-radius: 3px;
    border: 1px solid #aeaeae;
    cursor: pointer;
    background-color: transparent;
  }
`;

const CareerListtItme = styled.div`
  position: relative;
  width: 199.75px;
  background-color: #f4f6f9;
  border-radius: 8px;
  border: 1px solid transparent;
  display: flex;

  .text-input {
    padding: 8px 16px;
    background-color: transparent;
    border: none;
    outline: none;
    flex-grow: 1;
    cursor: pointer;
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
    cursor: pointer;
  }
`;

export default CareerListSection;
