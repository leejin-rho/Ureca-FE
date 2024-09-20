import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '../styles/colors';

const Home = () => {
  return <MainContainer></MainContainer>;
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
