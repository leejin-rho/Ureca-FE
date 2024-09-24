import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

const headingStyles = {
  h1: css`
    font-family: 'Pretendard';
    font-size: 48px;
    font-weight: 800;
  `,
  h2: css`
    font-family: 'Pretendard';
    font-size: 30px;
    font-weight: 700;
  `,
  h3: css`
    font-family: 'Pretendard';
    font-size: 27px;
    font-weight: 800;
  `,
  h4: css`
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 700;
  `,
  h5: css`
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 400;
  `,
  h6: css`
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 500;
  `,
  h7: css`
    font-family: 'Pretendard';
    font-size: 16px;
    font-weight: 800;
  `,
  h8: css`
    font-family: 'Pretendard';
    font-size: 15px;
    font-weight: 500;
  `,
  h9: css`
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 600;
  `,
};

export const Text = styled.div`
  color: ${({ color }) => (color ? color : colors.black)};
  display: flex;
  align-items: center;
  text-align: center;
  margin: ${({ margin }) => (margin ? margin : '0')};
  ${({ variant }) => headingStyles[variant] || headingStyles.h5}
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '150%')};
  white-space: pre-wrap;
  width: fit-content;
`;
