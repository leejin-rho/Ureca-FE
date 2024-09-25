import styled from '@emotion/styled';
import Section from '@components/home/Section';
import { Flex } from '@components/global/Flex';

const FAQ = () => {
  return (
    <Section
      title="자주 묻는 질문"
      expl="궁금한 점이 있으신가요?"
      subexpl="자주 묻는 질문은 아래의 링크를 확인해주시고
문의 사항이 있다면 카카오톡으로 문의해주세요."
    >
      <FAQContainer></FAQContainer>
    </Section>
  );
};

export default FAQ;

const FAQContainer = styled(Flex)`
  margin-top: 6.15rem;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
