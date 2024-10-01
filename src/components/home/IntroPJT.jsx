/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Section from '@components/home/Section';
import { PNGImage } from '@components/global/PNGImage';
import { Flex } from '@components/global/Flex';
import { Grid } from '@components/global/Grid';
import { GlassBox } from '@components/global/GlassBox';
import FEBasic from '@assets/images/pngs/frontbasic.png';
import FEDeep from '@assets/images/pngs/frontdeep.png';
import FEPJT from '@assets/images/pngs/frontPJT.png';
import BEBasic from '@assets/images/pngs/backbasic.png';
import BEDeep from '@assets/images/pngs/backdeep.png';
import BEPJT from '@assets/images/pngs/backPJT.png';
import Moonu from '@assets/images/pngs/moonu-colabo.png';
import Arrow1 from '@/assets/images/svgs/ArrowTop';
import Arrow2 from '@/assets/images/svgs/ArrowLeft';
import Arrow3 from '@/assets/images/svgs/ArrowRight';
import Arrow4 from '@/assets/images/svgs/ArrowBottom';

const IntroPJT = () => {
  return (
    <Section
      title="WHY URECA?"
      expl="LG U+ 유레카 아카데미 프로젝트 소개"
      subexpl={
        '프론트엔드와 백엔드 팀 융합 프로젝트를 통해 소통 및 협업 능력을 키우고, LG 유플러스 현업 도구 및 \n현직자 참여 기반 프로젝트 진행을 통해 프로젝트 기획/분석/설계 능력을 익힐 수 있습니다.'
      }
    >
      <PJTWrapper width="fit-content" mobileGap="2">
        <Grid mobileGap="1.5" repeat="3">
          <Flex webGap="0.5" mobileGap="0.5">
            <PJTImage
              src={FEBasic}
              alt="FEBasic"
              height="14rem"
              heightMobile="13rem"
            />
            <PJTImage
              src={FEDeep}
              alt="FEDeep"
              height="14rem"
              heightMobile="13rem"
            />
          </Flex>
          <ArrowDiv margin="0 0 0 3.5rem">
            <ArrowTop height="7rem" />
          </ArrowDiv>
          <PJTImage
            src={BEPJT}
            alt="BEPJT"
            height="14rem"
            heightMobile="12rem"
          />
        </Grid>
        <Grid mobileGap="2.5" height="12" repeat="3">
          <ArrowDiv>
            <ArrowLeft height="7rem" />
          </ArrowDiv>
          <ArrowDiv>
            <PNGImage
              src={Moonu}
              alt="colaboration"
              height="10rem"
              heightMobile="8rem"
              width="auto"
            />
          </ArrowDiv>
          <ArrowDiv>
            <ArrowRight height="7rem" />
          </ArrowDiv>
        </Grid>
        <Grid mobileGap="2.5" repeat="3">
          <PJTImage
            src={FEPJT}
            alt="BEPJT"
            height="14rem"
            heightMobile="12rem"
          />
          <ArrowDiv margin="0 3.5rem 0 0">
            <ArrowBottom height="7rem" />
          </ArrowDiv>
          <Flex webGap="0.5" mobileGap="0.5">
            <PJTImage
              src={BEBasic}
              alt="FEBasic"
              height="14rem"
              heightMobile="13rem"
            />
            <PJTImage
              src={BEDeep}
              alt="FEDeep"
              height="14rem"
              heightMobile="13rem"
            />
          </Flex>
        </Grid>
      </PJTWrapper>
    </Section>
  );
};

export default IntroPJT;

const PJTWrapper = styled(GlassBox)`
  @media (max-width: 1023px) {
    padding: 1rem;
  }
`;

const PJTImage = styled(PNGImage)`
  flex: 1;

  @media (max-width: 1023px) {
    flex: 1;
    width: auto;
  }
`;

const ArrowDiv = styled(Flex)`
  flex: 1;
  @media (max-width: 1023px) {
    flex: 0;
    width: auto;
  }
`;

const ArrowTop = styled(Arrow1)`
  @media (max-width: 1023px) {
    height: 6.5rem;
  }
`;

const ArrowLeft = styled(Arrow2)`
  @media (max-width: 1023px) {
    height: 6rem;
  }
`;

const ArrowRight = styled(Arrow3)`
  @media (max-width: 1023px) {
    height: 6rem;
  }
`;

const ArrowBottom = styled(Arrow4)`
  @media (max-width: 1023px) {
    height: 6.5rem;
  }
`;
