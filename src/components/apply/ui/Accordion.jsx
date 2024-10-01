import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { options } from '../../../assets/data/selectData';
import { Button } from './InputFieldUi';

function Accordion({
  questionsActiveBtn,
  setQuestionState,
  setQuestionActiveBtn,
}) {
  const [show, setShow] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('0px');

  useEffect(() => {
    setHeight(show ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [show]);

  return (
    <AccordionItem>
      <AccordionItemTitle onClick={() => setShow(!show)}>
        <h2>추가질문</h2>
        {show ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </AccordionItemTitle>
      <AccordionItemContent ref={contentRef} show={show} style={{ height }}>
        <AccordionItemTesst>
          {options.questions.map((question, idx) => {
            return (
              <AccordionQuestionContent key={idx}>
                <h2>{question.message}</h2>

                <AccordionQuestionBtnGroup>
                  <Button
                    type={question.type}
                    buttons={question.buttons}
                    setState={(value) => setQuestionState(question.type, value)}
                    setActiveBtn={(id) =>
                      setQuestionActiveBtn(`${question.type}ActiveBtn`, id)
                    }
                    activeButton={
                      questionsActiveBtn[`${question.type}ActiveBtn`]
                    }
                  />
                </AccordionQuestionBtnGroup>
              </AccordionQuestionContent>
            );
          })}
        </AccordionItemTesst>
      </AccordionItemContent>
    </AccordionItem>
  );
}

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f4f6f9;
  border-radius: 8px;
  overflow: hidden;
`;

const AccordionItemTitle = styled.div`
  padding: 12px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  line-height: 150%;
  color: #232527;
  cursor: pointer;
  background-color: #f4f6f9;
`;

const AccordionItemContent = styled.div`
  color: #232527;
  height: 0;
  overflow: hidden;
  transition: 0.5s;
`;

const AccordionItemTesst = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  padding: 12px 18px;
  margin-top: 8px;
`;

const AccordionQuestionContent = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    font-size: 14px;
    font-weight: 600;
    word-break: keep-all;
  }
`;

const AccordionQuestionBtnGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`;

export default Accordion;
