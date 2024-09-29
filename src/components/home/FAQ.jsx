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
      <FAQContainer direction="column" mobileGap="0.75">
        {Information.FAQData.slice(0, 5).map((item) => (
          <QNABox direction="column" key={item.id}>
            <Question>
              <Text
                color={colors.white}
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
                    color={colors.white}
                    style={{ cursor: 'pointer' }}
                  />
                ) : (
                  <OpenArrow
                    height="2rem"
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

      <Button
        width="18rem"
        height="3.25rem"
        bgi={colors.glass}
        bg={colors.glass}
        hbgi={colors.glassHover}
        hoverBg={colors.glass}
        borderRadius="2rem"
        fontSize="1.125rem"
        fontColor={colors.white}
        onClick={onFAQBtn}
      >
        더 많은 질문 보기 {'>'}
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
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
`;

const QNABox = styled(Flex)`
  width: 55vw;
  border: 0.075rem solid ${colors.white};
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
  margin: 1.5rem 0;
`;
