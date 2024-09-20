import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset}
  * {
    font-family: 'Pretendard', sans-serif;
  }

  html {
    font-size: 10px;
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
  }

  body {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    min-width: 320px;
    min-height: 100vh;

    justify-content: flex-start;
    align-items: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .h1 {
    font-family: 'Pretendard';
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
  }
  .h2 {
    font-family: 'Pretendard';
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
  }
  .h3 {
    font-family: 'Pretendard';
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
  }
  .h4 {
    font-family: 'Pretendard';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
  }
  .h5 {
    font-family: 'Pretendard';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
  }
  .h6 {
    font-family: 'Pretendard';
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
  }
`;
