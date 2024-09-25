import { useEffect, useRef, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import InfoList from '@components/home/InfoList';
import Subheader from '@components/home/SubHeader';
import Navbar from '@components/global/Navbar';
import Education from '@components/home/Education';
import Goal from '@components/home/Goal';
import FAQ from '@components/home/FAQ';
import Benefit from '@components/home/Benefit';
import Order from '@components/home/Order';
import ProjectIntro from '@components/home/ProjectIntro';

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
            <Goal />
          </div>

          <div ref={(el) => (sectionRefs.current[1] = el)}>
            <Benefit />
            <ProjectIntro />
          </div>

          <div ref={(el) => (sectionRefs.current[2] = el)}>
            <Education />
          </div>

          <div ref={(el) => (sectionRefs.current[3] = el)}>
            <Order />
          </div>

          <div ref={(el) => (sectionRefs.current[4] = el)}>
            <FAQ />
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
