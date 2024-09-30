import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '@/styles/colors';

const headingStyles = {
  // 1rem = 16px
  h1: css`
    font-family: 'Pretendard';
    font-size: 2.815rem;
    font-weight: 700;
  `,
  h2: css`
    font-family: 'Pretendard';
    font-size: 1.875rem;
    font-weight: 700;
  `,
  h3: css`
    font-family: 'Pretendard';
    font-size: 1.5rem;
    font-weight: 800;
  `,
  h4: css`
    font-family: 'Pretendard';
    font-size: 1.25rem;
    font-weight: 700;
  `,
  h5: css`
    font-family: 'Pretendard';
    font-size: 1.25rem;
    font-weight: 400;
  `,
  h6: css`
    font-family: 'Pretendard';
    font-size: 1.125rem;
    font-weight: 500;
  `,
  h7: css`
    font-family: 'Pretendard';
    font-size: 1rem;
    font-weight: 800;
  `,
  h8: css`
    font-family: 'Pretendard';
    font-size: 0.95rem;
    font-weight: 600;
  `,
  h9: css`
    font-family: 'Pretendard';
    font-size: 0.875rem;
    font-weight: 500;
  `,
  h10: css`
    font-family: 'Pretendard';
    font-size: 0.75rem;
    font-weight: 600;
  `,
  h11: css`
    font-family: 'Pretendard';
    font-size: 0.625rem;
    font-weight: 500;
  `,
};

export const Text = styled.div`
  color: ${({ color }) => (color ? color : colors.black)};
  display: flex;
  align-items: center;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'center')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  ${({ variant }) => headingStyles[variant] || headingStyles.h5}
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : '150%')};
  white-space: pre-wrap;
  word-break: break-all;
  width: fit-content;
  /* flex-shrink: 0; */

  @media (max-width: 1023px) {
    ${({ mobileTypo, variant }) =>
      mobileTypo ? headingStyles[mobileTypo] : headingStyles[variant]};
  }
`;
