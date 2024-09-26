/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const PNGImage = styled.img`
  height: ${({ height, heightPer }) =>
    height ? `${height}` : heightPer ? `${heightPer}%` : '100%'};
  flex-shrink: 0;

  @media (max-width: 1023px) {
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}rem` : '0')};
  }
`;
