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
      subexpl="프론트엔드와 백엔드 팀 융합 프로젝트를 통해 소통 및 협업 능력을 키우고, LG 유플러스 현업 도구 및 
현직자 참여 기반 프로젝트 진행을 통해 프로젝트 기획/분석/ 설계 능력을 익힐 수 있습니다."
    >
      <GlassBox width="fit-content" mobileGap="3">
        <Grid mobileGap="2.5" gridCol="3">
          <Flex webGap="1" mobileGap="0.25">
            <PJTImage
              src={FEBasic}
              alt="FEBasic"
              height="24rem"
              heightMobile="18rem"
            />
            <PJTImage
              src={FEDeep}
              alt="FEDeep"
              height="24rem"
              heightMobile="18rem"
            />
          </Flex>
          <ArrowDiv margin="0 0 0 3.5rem">
            <ArrowTop height="16rem" />
          </ArrowDiv>
          <PJTImage
            src={BEPJT}
            alt="BEPJT"
            height="24rem"
            heightMobile="20rem"
          />
        </Grid>
        <Grid mobileGap="2.5" height="18" gridCol="3">
          <ArrowDiv>
            <ArrowLeft height="10rem" />
          </ArrowDiv>
          <ArrowDiv>
            <PNGImage src={Moonu} alt="colaboration" height="15rem" />
          </ArrowDiv>
          <ArrowDiv>
            <ArrowRight height="10rem" />
          </ArrowDiv>
        </Grid>
        <Grid mobileGap="2.5" gridCol="3">
          <PJTImage
            src={FEPJT}
            alt="BEPJT"
            height="24rem"
            heightMobile="20rem"
          />
          <ArrowDiv margin="0 3.5rem 0 0">
            <ArrowBottom height="16rem" />
          </ArrowDiv>
          <Flex webGap="1" mobileGap="0.25">
            <PJTImage
              src={BEBasic}
              alt="FEBasic"
              height="24rem"
              heightMobile="18rem"
            />
            <PJTImage
              src={BEDeep}
              alt="FEDeep"
              height="24rem"
              heightMobile="18rem"
            />
          </Flex>
        </Grid>
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

const ArrowTop = styled(Arrow1)`
  @media (max-width: 1023px) {
    height: 10rem;
  }
`;

const ArrowLeft = styled(Arrow2)`
  @media (max-width: 1023px) {
    height: 10rem;
  }
`;

const ArrowRight = styled(Arrow3)`
  @media (max-width: 1023px) {
    height: 10rem;
  }
`;

const ArrowBottom = styled(Arrow4)`
  @media (max-width: 1023px) {
    height: 10rem;
  }
`;
