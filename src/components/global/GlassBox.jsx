/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { Flex } from '@components/global/Flex';

export const GlassBox = styled(Flex)`
  padding: ${({ padding }) => (padding ? padding : '2.25rem')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  border-radius: 1rem;
  border: 1px solid #e8eaff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.34) 0%,
    rgba(255, 255, 255, 0.11) 0.01%,
    rgba(255, 255, 255, 0.21) 100%
  );
  backdrop-filter: blur(15px);
`;
