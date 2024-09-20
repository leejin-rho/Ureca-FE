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
    font-family: 'Pretendard', sans-serif;
  }
`;
