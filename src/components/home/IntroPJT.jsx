/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Section from '@components/home/Section';
import { PNGImage } from '@components/global/PNGImage';
import { Flex } from '@components/global/Flex';
import { GlassBox } from '@components/global/GlassBox';
import FEBasic from '@assets/images/pngs/frontbasic.png';
import FEDeep from '@assets/images/pngs/frontdeep.png';
import FEPJT from '@assets/images/pngs/frontPJT.png';
import BEBasic from '@assets/images/pngs/backbasic.png';
import BEDeep from '@assets/images/pngs/backdeep.png';
import BEPJT from '@assets/images/pngs/backPJT.png';
import Moonu from '@assets/images/pngs/moonu-colabo.png';
import ArrowTop from '@/assets/images/svgs/ArrowTop';
import ArrowLeft from '@/assets/images/svgs/ArrowLeft';
import ArrowRight from '@/assets/images/svgs/ArrowRight';
import ArrowBottom from '@/assets/images/svgs/ArrowBottom';

const IntroPJT = () => {
  return (
    <Section
      title="WHY URECA?"
      expl="LG U+ 유레카 아카데미 프로젝트 소개"
      subexpl="프론트엔드와 백엔드 팀 융합 프로젝트를 통해 소통 및 협업 능력을 키우고, LG 유플러스 현업 도구 및 
현직자 참여 기반 프로젝트 진행을 통해 프로젝트 기획/분석/ 설계 능력을 익힐 수 있습니다."
    >
      <GlassBox>
        <Flex webGap="8" mobileGap="2.5">
          <Flex webGap="1" style={{ flex: 1 }}>
            <PJTImage src={FEBasic} alt="FEBasic" height="24rem" />
            <PJTImage src={FEDeep} alt="FEDeep" height="24rem" />
          </Flex>
          <ArrowDiv margin="0 0 0 3.5rem">
            <ArrowTop height="16rem" />
          </ArrowDiv>
          <PJTImage src={BEPJT} alt="BEPJT" height="24rem" />
        </Flex>
        <Flex webGap="8" mobileGap="2.5" height="22">
          <ArrowDiv>
            <ArrowLeft height="10rem" />
          </ArrowDiv>
          <PNGImage src={Moonu} alt="moonu-colab" height="12rem" />
          <ArrowDiv>
            <ArrowRight height="10rem" />
          </ArrowDiv>
        </Flex>
        <Flex webGap="8" mobileGap="2.5">
          <PJTImage src={FEPJT} alt="BEPJT" height="24rem" />
          <ArrowDiv margin="0 3.5rem 0 0">
            <ArrowBottom height="16rem" />
          </ArrowDiv>
          <Flex webGap="1">
            <PJTImage src={BEBasic} alt="FEBasic" height="24rem" />
            <PJTImage src={BEDeep} alt="FEDeep" height="24rem" />
          </Flex>
        </Flex>
      </GlassBox>
    </Section>
  );
};

export default IntroPJT;

const PJTImage = styled(PNGImage)`
  flex: 1;
`;

const ArrowDiv = styled(Flex)`
  flex: 1;
`;
