import styled from '@emotion/styled';
import { Flex } from './Flex';
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
  width: 72px;
  right: 2rem;
  bottom: 2rem;
`;
