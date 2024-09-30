import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { useState } from 'react';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import OpenArrow from '@/assets/images/svgs/OpenArrow';
import CloseArrow from '@/assets/images/svgs/CloseArrow';
import Information from '@/assets/data/Information.json';

const FAQList = ({ listNum, FAQColor }) => {
  const [isOpened, setIsOpened] = useState([]);

  const handleOpen = (idx) => {
    setIsOpened((prevState) => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  return (
    <FAQContainer direction="column" mobileGap="0.75">
      {Information.FAQData.slice(0, listNum).map((item) => (
        <QNABox direction="column" key={item.id} FAQColor={{ FAQColor }}>
          <Question>
            <Text
              color={FAQColor}
              variant="h7"
              mobileTypo="h9"
              textAlign="flex-start"
            >
              {item.q}
            </Text>
            <div onClick={() => handleOpen(item.id)}>
              {isOpened[item.id] ? (
                <CloseArrow
                  height="2rem"
                  color={FAQColor}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <OpenArrow
                  height="2rem"
                  color={FAQColor}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </div>
          </Question>

          {isOpened[item.id] ? (
            <>
              <SeperateLine />
              <Answer>
                <Text
                  color={FAQColor}
                  variant="h8"
                  textAlign="flex-start"
                  mobileTypo="h9"
                >
                  {item.a}
                </Text>
              </Answer>
            </>
          ) : null}
        </QNABox>
      ))}
    </FAQContainer>
  );
};

export default FAQList;

const FAQContainer = styled(Flex)`
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
`;

const QNABox = styled(Flex)`
  width: 55vw;
  border: 0.075rem solid ${({ FAQColor }) => FAQColor || colors.white};
  border-radius: 1rem;
  padding: 1.5rem 2.25rem;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const Question = styled(Flex)`
  justify-content: space-between;
`;

const Answer = styled(Flex)`
  justify-content: flex-start;
  padding: 0 0.25rem;
`;

const SeperateLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.disabled};
  margin: 1rem 0;
`;
