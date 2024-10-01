import styled from '@emotion/styled';
import Section from '@components/home/Section';
import { PNGImage } from '@components/global/PNGImage';
import UrecaMerit from '@/assets/images/pngs/ureca-merit.png';
import UrecaMeritMobile from '@/assets/images/pngs/ureca-merit-mobile.png';

const Benefit = () => {
  return (
    <Section
      title="WHY URECA?"
      expl="LG U+ 유레카 아카데미만의 혜택"
      subexpl={
        '유레카는 LG유플러스가 원하는 IT 인재 육성을 위한 교육과정입니다.\n수료생 전원 입사 지원 시 서류 전형, 코딩테스트를 면제합니다.'
      }
    >
      <WebImg
        src={UrecaMerit}
        alt="유레카 혜택"
        height="34rem"
        widthMobile="100vw"
      />
      <MobileImg src={UrecaMeritMobile} widthMobile="100%"></MobileImg>
    </Section>
  );
};

export default Benefit;

const WebImg = styled(PNGImage)`
  @media (max-width: 1023px) {
    display: none;
  }
`;

const MobileImg = styled(PNGImage)`
  @media (min-width: 1023px) {
    display: none;
  }
`;
