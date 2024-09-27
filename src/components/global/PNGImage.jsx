/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const PNGImage = styled.img`
  height: ${({ height }) => (height ? `${height}` : 'fit-content')};
  width: ${({ width }) => (width ? `${width}` : 'fit-content')};
  flex-shrink: 0;

  @media (max-width: 1023px) {
    height: ${({ heightMobile }) =>
      heightMobile
        ? `${heightMobile}`
        : ({ height }) => (height ? `${height}` : 'fit-content')};
    width: ${({ widthMobile }) =>
      widthMobile
        ? `${widthMobile}`
        : ({ width }) => (width ? `${width}` : 'fit-content')};
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}rem` : '0')};
  }
`;
