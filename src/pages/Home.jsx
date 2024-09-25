import { useEffect, useRef, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { GlassBox } from '@components/global/GlassBox';
import { PNGImage } from '@components/global/PNGImage';
import UrecaMerit from '@/assets/images/pngs/ureca-merit.png';
import UrecaOrder from '@/assets/images/pngs/recruit-order.png';
import Section from '@components/home/Section';
import InfoList from '@components/home/InfoList';
import Subheader from '@components/home/SubHeader';
import Navbar from '@components/global/Navbar';
import Education from '@components/home/Education';
import Goal from '@components/home/Goal';

const Home = () => {
  const sectionRefs = useRef([]);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <MainContainer>
        <Subheader />
        <InfoList />
        <SectionList direction="column">
          <div ref={(el) => (sectionRefs.current[0] = el)}>
            <Section
              title="교육 목표"
              expl="이동통신 서비스 기업 LG U+가
유레카 아카데미를 운영하는 이유"
              subexpl="현업 수요에 따른 커리큘럼과, 융합 프로젝트를 통한 역량을 강화하고, 
프로젝트 중심 교육과 LG유플러스 현업 멘토링을 통해 실무형 인재로 거듭날 수 있습니다."
            >
              <Goal />
            </Section>
          </div>

          <div ref={(el) => (sectionRefs.current[1] = el)}>
            <Section
              title="WHY URECA?"
              expl="LG U+ 유레카 아카데미만의 혜택"
              subexpl="유레카는 LG유플러스가 원하는 IT 인재 육성을 위한 교육과정입니다.
수료생 전원 입사 지원 시 서류 전형, 코딩테스트를 면제합니다."
            >
              <PNGImage src={UrecaMerit} height={'52rem'} />
            </Section>
          </div>

          <Section
            title="WHY URECA?"
            expl="LG U+ 유레카 아카데미 프로젝트 소개"
            subexpl="프론트엔드와 백엔드 팀 융합 프로젝트를 통해 소통 및 협업 능력을 키우고, LG 유플러스 현업 도구 및 
현직자 참여 기반 프로젝트 진행을 통해 프로젝트 기획/분석/ 설계 능력을 익힐 수 있습니다."
          >
            <GlassBox />
          </Section>

          <div ref={(el) => (sectionRefs.current[2] = el)}>
            <Section
              title="교육안내"
              expl="필요한 것만 쏙쏙, 탄탄하게 준비했습니다"
              subexpl="유플러스에서 직접 커리큘럼을 구성했습니다."
            >
              <Education />
            </Section>
          </div>

          <div ref={(el) => (sectionRefs.current[3] = el)}>
            <Section
              title="선발절차"
              expl="서류접수 이후 선발절차"
              subexpl="서류 접수부터 오리엔테이션까지 선발절차를 확인하세요.
더 자세한 날짜는 서류 합격 이후 개별 연락드릴 예정입니다."
            >
              <PNGImage src={UrecaOrder} height={'14.5rem'} />
            </Section>
          </div>
          <div ref={(el) => (sectionRefs.current[4] = el)}>
            <Section
              title="자주 묻는 질문"
              expl="궁금한 점이 있으신가요?"
              subexpl="자주 묻는 질문은 아래의 링크를 확인해주시고
문의 사항이 있다면 카카오톡으로 문의해주세요."
            ></Section>
          </div>
        </SectionList>
      </MainContainer>
    </>
  );
};

export default Home;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background: linear-gradient(
      180deg,
      rgba(196, 126, 126, 0) 9.63%,
      rgba(226, 0, 126, 0.06) 75.6%,
      rgba(230, 0, 126, 0.1) 100%
    ),
    ${colors.background};

  padding-top: 72px;
`;

const SectionList = styled(Flex)`
  margin-bottom: 8rem;
`;
