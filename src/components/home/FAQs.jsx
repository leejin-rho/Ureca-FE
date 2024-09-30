import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import Section from '@components/home/Section';
import { Flex } from '@components/global/Flex';
import { Button } from '@components/global/Button';
import FAQList from './FAQList';

const FAQs = () => {
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
        <FAQList listNum={5} FAQColor={colors.white} />
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

export default FAQs;

const FAQContainer = styled(Flex)`
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.25rem;
  gap: 0.75rem;
`;
