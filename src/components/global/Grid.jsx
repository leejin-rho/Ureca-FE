import styled from '@emotion/styled';

export const Grid = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  gap: ${({ webGap }) => (webGap ? `${webGap}rem` : '0rem')};
  width: ${({ width, widthPer }) =>
    width ? `${width}rem` : widthPer ? `${widthPer}%` : '100%'};
  height: ${({ height, heightPer }) =>
    height ? `${height}rem` : heightPer ? `${heightPer}%` : '100%'};
  margin: ${({ margin }) => (margin ? margin : '0')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : `transparent`};

  grid-template-columns: ${({ gridCol }) =>
    gridCol ? `repeat(${gridCol}, 1fr)` : 'repeat(2, 1fr)'};

  /* 브라우저 크기에 따라 가로 크기 변경 */
  @media (max-width: 1023px) {
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}rem` : '0')};
    grid-template-columns: repeat(1, 1fr);
    display: grid;
  }
`;
