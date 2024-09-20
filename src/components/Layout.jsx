import styled from '@emotion/styled';
import { Flex } from '@components/Flex';
import Navbar from '@components/Navbar';

export const Layout = ({ children }) => {
  return (
    <Wrapper direction="column" align="center">
      <Navbar />
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  overflow-x: hidden;
`;
