import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import Section from '@components/home/Section';

const Home = () => {
  return (
    <MainContainer>
      <DummyImg />
      <Section
        title="교육목표"
        expl="이동통신 서비스 기업 LG U+가
유레카 아카데미를 운영하는 이유"
      />
    </MainContainer>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;

  background-color: ${colors.background};
`;

const DummyImg = styled.div`
  width: 100%;
  height: 42.5rem;
  background-color: #5e5a5a;
`;
