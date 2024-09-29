import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import LogoImage from '@assets/images/svgs/FooterLogo';
import SupportImage1 from '@assets/images/svgs/Support1';
import SupportImage2 from '@assets/images/svgs/Support2';
import { Text } from '@components/global/Text';
import { Flex } from '@components/global/Flex';

const Footer = () => {
  return (
    <FooterContainer>
      <Wrapper>
        <LogoImage height="2.5rem" />
        <Text
          color={colors.white}
          textAlign="flex-start"
          variant="h9"
          mobileTypo="h11"
        >
          유레카는 고용노동부와 지원하며 LG유플러스가 운영지원하는
          프로그램입니다. 현업 수요에 따른 커리큘럼과, 융합 프로젝트를 통한
          역량을 강화하고, 프로젝트 중심 교육과 LG유플러스 현업 멘토링을 통해
          실무형 인재로 거듭날 수 있습니다.
        </Text>
        <Flex justify="flex-start">
          <SupportImage1 height="1.75rem" />
          <SupportImage2 height="1.75rem" />
        </Flex>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 4rem 5rem;
  align-items: flex-start;
  gap: 2.7rem;
  background-color: black;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    padding: 2.5rem 2rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 810px;
  gap: 2.25rem;

  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 600;
  color: ${colors.white};
  line-height: 150%;
`;
