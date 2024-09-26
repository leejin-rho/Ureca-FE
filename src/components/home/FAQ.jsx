import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { useState } from 'react';
import Section from '@components/home/Section';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import { Button } from '@components/global/Button';
import OpenArrow from '@/assets/images/svgs/OpenArrow';
import CloseArrow from '@/assets/images/svgs/CloseArrow';
import Information from '@/assets/data/Information.json';

const FAQ = () => {
  const [isOpened, setIsOpened] = useState([false, false, false, false, false]);

  const handleOpen = (idx) => {
    setIsOpened((prevState) => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  const onFAQBtn = () => {
    window.location.href = 'https://lgupluskdt.recruiter.co.kr/career/FAQ';
  };

  return (
    <Section
      title="자주 묻는 질문"
      expl="궁금한 점이 있으신가요?"
      subexpl="자주 묻는 질문은 아래의 글과 링크를 확인해주시고
문의 사항이 있다면 카카오톡으로 문의해주세요."
    >
      <FAQContainer direction="column">
        {Information.FAQData.slice(0, 5).map((item) => (
          <QNABox direction="column" key={item.id}>
            <Question>
              <Text color={colors.white} variant="h7">
                {item.q}
              </Text>
              <div onClick={() => handleOpen(item.id)}>
                {isOpened[item.id] ? (
                  <CloseArrow
                    height="3.5rem"
                    color={colors.white}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <OpenArrow
                    height="3.5rem"
                    color={colors.white}
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
                    color={colors.white}
                    variant="h8"
                    textAlign="flex-start"
                  >
                    {item.a}
                  </Text>
                </Answer>
              </>
            ) : null}
          </QNABox>
        ))}
      </FAQContainer>

      <Button
        width="25rem"
        height="4.5rem"
        bgi={colors.glass}
        bg={colors.glass}
        hbgi={colors.glassHover}
        hoverBg={colors.glass}
        borderRadius="1.5rem"
        fontSize="18px"
        fontColor={colors.white}
        onClick={onFAQBtn}
      >
        자주 묻는 질문 {'>'}
      </Button>
    </Section>
  );
};

export default FAQ;

const FAQContainer = styled(Flex)`
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  gap: 1.75rem;
`;

const QNABox = styled(Flex)`
  width: 55vw;
  border: 0.15rem solid ${colors.white};
  border-radius: 2rem;
  padding: 2rem 3rem;
  box-sizing: border-box;
`;

const Question = styled(Flex)`
  justify-content: space-between;
`;

const Answer = styled(Flex)`
  justify-content: flex-start;
  padding: 0 0.5rem;
`;

const SeperateLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.disabled};
  margin: 1.5rem 0;
`;
