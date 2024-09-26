import styled from '@emotion/styled';
import { Flex } from './Flex';
import Navbar from './Navbar';
import Footer from './Footer';
import SvgKakaoTalkButtonDefault from '@assets/images/svgs/KakaoTalkButtonDefault';

export const Layout = ({ children }) => {
  return (
    <Wrapper direction="column" align="center">
      {children}
      <Footer />
      <a href="https://pf.kakao.com/_RxlNeG/chat">
        <KaKaoTalkButton />
      </a>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  overflow-x: hidden;
`;

const KaKaoTalkButton = styled(SvgKakaoTalkButtonDefault)`
  position: fixed;
  width: 7rem;
  right: 3rem;
  bottom: 3rem;
`;
