import { useEffect, useRef } from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import Subheader from '@components/home/SubHeader';
import InfoList from '@components/home/InfoList';
import { useScroll } from '@assets/context/ScrollContext';

//section 목록
import Goal from '@components/home/Goal';
import Education from '@components/home/Education';
import Benefit from '@components/home/Benefit';
import IntroPJT from '@components/home/IntroPJT';
import Order from '@components/home/Order';
import FAQs from '@components/home/FAQs';

const Home = () => {
  const { sectionRefs } = useScroll();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <MainContainer>
        <Subheader />
        <InfoList />
        <SectionList direction="column">
          <div ref={(el) => (sectionRefs.current[0] = el)}>
            <Goal />
          </div>

          <Flex direction="column" ref={(el) => (sectionRefs.current[1] = el)}>
            <Benefit />
            <IntroPJT />
          </Flex>

          <div ref={(el) => (sectionRefs.current[2] = el)}>
            <Education />
          </div>

          <div ref={(el) => (sectionRefs.current[3] = el)}>
            <Order />
          </div>

          <div ref={(el) => (sectionRefs.current[4] = el)}>
            <FAQs />
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
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(
      180deg,
      rgba(196, 126, 126, 0) 9.63%,
      rgba(226, 0, 126, 0.06) 75.6%,
      rgba(230, 0, 126, 0.1) 100%
    ),
    ${colors.background};

  padding: 72px 0 0 0;

  @media (max-width: 1023px) {
    padding: 62px 0 0 0;
  }
`;

const SectionList = styled(Flex)`
  width: 100%;
  margin-bottom: 8rem;
`;
