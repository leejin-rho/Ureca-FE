import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import LogoImage from '@assets/images/svgs/FooterLogo';
import SupportImage1 from '@assets/images/svgs/Support1';
import SupportImage2 from '@assets/images/svgs/Support2';
import { Flex } from './Flex';

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <LogoImage height="3.5rem" />
        유레카는 고용노동부와 지원하며 LG유플러스가 운영지원하는 프로그램입니다.
        현업 수요에 따른 커리큘럼과, 융합 프로젝트를 통한 역량을 강화하고,
        프로젝트 중심 교육과 LG유플러스 현업 멘토링을 통해 실무형 인재로 거듭날
        수 있습니다.
        <Flex justify="flex-start">
          <SupportImage1 height="3rem" />
          <SupportImage2 height="3rem" />
        </Flex>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 7rem 8.5rem;
  align-items: flex-start;
  gap: 3.125rem;
  background-color: black;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 810px;
  gap: 4.25rem;

  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  line-height: 150%;
`;
