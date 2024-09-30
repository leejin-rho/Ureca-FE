import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import FAQList from '@components/home/FAQList';
import { Flex, Text } from '@components/global';
import { useEffect } from 'react';

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Wrapper>
      <Header>
        <Text variant="h1">자주 묻는 질문</Text>
        <Text variant="h5" textAlign="flex-start">
          채용사이트를 통해 가장 많이 물어보는 질문들이에요.{'\n'}
          원하시는 답변이 없으실 경우, 1:1 문의하기를 이용해주세요.
        </Text>
      </Header>
      <FAQList listNum={13} FAQColor={colors.black} />
    </Wrapper>
  );
};

export default FAQ;

const Wrapper = styled(Flex)`
  height: 100%;
  flex-direction: column;
  overflow: auto;
  padding: 8rem;
  gap: 5rem;
`;

const Header = styled(Flex)`
  flex-direction: column;
  align-items: flex-start;
`;
