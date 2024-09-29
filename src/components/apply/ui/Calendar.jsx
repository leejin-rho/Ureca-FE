import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function Calendar({
  changeValue,
  toggle,
  selectedDate,
  setSelectedDate,
  year,
  setYear,
  month,
  setMonth,
}) {
  const updateYearMonth = () => {
    setYear(selectedDate.getFullYear());
    setMonth(selectedDate.getMonth());
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const displayDates = () => {
    const dates = []; // 매번 새로 렌더링될 때 초기화

    // 1. 이전 달의 마지막 날짜와 요일
    const lastOfPrevMonth = new Date(year, month, 0); // 이전 달의 마지막 날
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 현재 달 첫 번째 날의 요일

    // 2. 현재 달의 마지막 날짜
    const lastOfMonth = new Date(year, month + 1, 0); // 현재 달의 마지막 날
    const totalDaysInMonth = lastOfMonth.getDate();

    // 3. 다음 달의 첫 번째 날
    const remainingDaysInWeek = 7 - ((firstDayOfMonth + totalDaysInMonth) % 7);

    // 1. 이전 달 마지막 주 렌더링
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = lastOfPrevMonth.getDate() - i;
      dates.push(createButton(day, true, -1)); // 이전 달 날짜 표시 (비활성화)
    }

    // 2. 현재 달의 날짜 렌더링
    for (let i = 1; i <= totalDaysInMonth; i++) {
      dates.push(createButton(i, false)); // 현재 달 날짜 표시 (활성화)
    }

    // 3. 다음 달 첫 주 렌더링 (남은 빈 칸 채우기)
    if (remainingDaysInWeek < 7) {
      for (let i = 1; i <= remainingDaysInWeek; i++) {
        dates.push(createButton(i, true, 1)); // 다음 달 날짜 표시 (비활성화)
      }
    }

    return dates;
  };

  // `createButton` 함수 수정
  const createButton = (text, isDisabled = false, type = 0) => {
    const currentDate = new Date();
    const comparisonDate = new Date(year, month + type, text); // 날짜 비교
    const isToday =
      currentDate.getDate() === text &&
      currentDate.getFullYear() === year &&
      currentDate.getMonth() === month;

    const selected = selectedDate.getTime() === comparisonDate.getTime();

    return (
      <button
        key={`${type}-${text}`} // 고유한 키 부여
        disabled={isDisabled} // 비활성화 여부 설정
        className={`${isToday ? 'today' : ''} ${selected ? 'selected' : ''}`}
        onClick={() => !isDisabled && handleDateClick(comparisonDate)}
      >
        {text}
      </button>
    );
  };

  useEffect(() => {
    updateYearMonth();
  }, [selectedDate]);

  return (
    <React.Fragment>
      <DatePicker>
        {/* 캘린더 헤더 영역(연도, 월, 이전달 / 다음달 버튼) */}
        <DatePickerHeader>
          {/* 이전달 버튼 */}
          <button
            className="prevBtn"
            onClick={() => {
              if (month === 0) setYear(year - 1);
              setMonth((month - 1 + 12) % 12);
            }}
          >
            <AiOutlineLeft />
          </button>

          {/* 연도 input 태그 */}
          <input
            type="number"
            className="year-input"
            value={year}
            onChange={(event) => setYear(Number(event.target.value))}
          />

          {/* 월 select 태그 */}
          <div>
            <select
              value={month}
              onChange={(event) => setMonth(Number(event.target.value))}
            >
              {Array.from({ length: 12 }, (_, idx) => {
                return (
                  <option key={idx} value={idx}>
                    {idx + 1}월
                  </option>
                );
              })}
            </select>
          </div>

          {/* 다음달 버튼 */}
          <button
            className="nextBtn"
            onClick={() => {
              if (month === 11) setYear(year + 1);
              setMonth((month + 1) % 12);
            }}
          >
            <AiOutlineRight />
          </button>
        </DatePickerHeader>

        {/* 캘린더 요일 나열 로직 */}
        <div className="days">
          {'일월화수목금토'.split('').map((day, idx) => {
            return <span key={idx}>{day}</span>;
          })}
        </div>

        {/* 캘린더 날짜 나열 로직 */}
        <div
          className="dates"
          onClick={(event) => {
            changeValue[0](
              changeValue[1],
              changeValue[2],
              `${year.toString().padStart(4, '0')}.${(month + 1)
                .toString()
                .padStart(2, '0')}.${event.target.textContent.padStart(
                2,
                '0',
              )}`,
            );
          }}
        >
          {displayDates()}
        </div>
      </DatePicker>

      <DatePickerContainer onClick={() => toggle[0](toggle[1], toggle[2])} />
    </React.Fragment>
  );
}

const DatePickerContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const DatePicker = styled.div`
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

export default Calendar;
