import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

const Home = () => {
  return (
    <MainContainer>
      <DummyImg />
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
