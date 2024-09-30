import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineDown,
  AiOutlineUp,
} from 'react-icons/ai';

function Accordion() {
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
        <span>{show ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}</span>
      </AccordionItemTitle>
      <AccordionItemContent ref={contentRef} show={show} style={{ height }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer auctor
        interdum leo quis molestie. In eleifend nunc et neque dignissim mollis.
        Aliquam ac tempus turpis, a vehicula elit. Ut quis tempus tellus.
        Pellentesque dignissim ligula mi, eu molestie risus viverra vel. Nam
        lacinia ex vitae dapibus facilisis. Donec fermentum mi non dolor
        convallis, vel dignissim justo mattis. Curabitur pulvinar lectus nisl.
        Quisque a feugiat libero. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aenean nec lorem mollis, semper velit a, dignissim
        ex. Sed convallis vitae enim in lacinia. Nullam vel semper nibh. Vivamus
        sed dolor hendrerit, ultricies lacus ac, dignissim libero. Praesent
        rhoncus, felis et bibendum auctor, turpis libero ornare libero, non
        aliquet justo tellus a arcu. Fusce accumsan vitae enim eget tristique.
        Vestibulum neque erat, consequat sed erat eu, auctor blandit lacus.
        Quisque dictum id libero vel sodales. Mauris a mattis est. Sed fermentum
        vestibulum elit sit amet gravida. Integer id dignissim tellus, nec
        consequat lacus. Phasellus ullamcorper tristique tellus vel posuere.
        Nunc ac est in libero tristique euismod. Mauris elit diam, lacinia sit
        amet nulla ac, fringilla tempor neque. Mauris mollis lacus ut finibus
        pellentesque. Aenean aliquet non turpis finibus ultricies. Nullam
        sodales pretium sodales. Nulla facilisi. Morbi at nisi eget velit
        eleifend consectetur. In sagittis varius leo, at venenatis nunc rhoncus
        sed. Proin justo ligula, congue id sapien eu, blandit faucibus neque.
        Maecenas viverra, augue a malesuada tempus, odio odio dignissim ligula,
        ac sagittis dui magna id ante.
      </AccordionItemContent>
    </AccordionItem>
  );
}

const AccordionItem = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #f4f6f9;
  /* background-color: #f4f6f9; */
  border-radius: 0.8rem;
  overflow: hidden;
`;

const AccordionItemTitle = styled.div`
  padding: 1.2rem 1.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 150%;
  color: #232527;
  cursor: pointer;
  background-color: #f4f6f9;
`;

const AccordionItemContent = styled.div`
  color: #8b7f75;
  height: 0;
  overflow: hidden;
  transition: 0.5s;

  padding: ${({ show }) => (show ? '1.2rem 1.8rem' : '')};
  margin-top: ${({ show }) => (show ? '0.8rem' : '')};
`;

export default Accordion;
