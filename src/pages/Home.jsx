import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import Section from '@components/home/Section';
import { Flex } from '@components/global/Flex';
import UrecaImage from '@/assets/images/pngs/URECA.png';
import UrecaMerit from '@/assets/images/pngs/ureca-merit.png';

const Home = () => {
  return (
    <MainContainer>
      <DummyImg direction="column" height={42.5} />
      <Flex direction="column">
        <Section
          title="교육 목표"
          expl="이동통신 서비스 기업 LG U+가
유레카 아카데미를 운영하는 이유"
          subexpl="현업 수요에 따른 커리큘럼과, 융합 프로젝트를 통한 역량을 강화하고, 
프로젝트 중심 교육과 LG유플러스 현업 멘토링을 통해 실무형 인재로 거듭날 수 있습니다."
        >
          <UrecaImg src={UrecaImage} />
        </Section>

        <Section
          title="WHY URECA?"
          expl="LG U+ 유레카 아카데미만의 혜택"
          subexpl="유레카는 LG유플러스가 원하는 IT 인재 육성을 위한 교육과정입니다.
수료생 전원 입사 지원 시 서류 전형, 코딩테스트를 면제합니다."
        >
          <UrecaImg src={UrecaMerit} height={'40rem'} />
        </Section>

        <Section
          title="WHY URECA?"
          expl="LG U+ 유레카 아카데미 프로젝트 소개"
          subexpl="프론트엔드와 백엔드 팀 융합 프로젝트를 통해 소통 및 협업 능력을 키우고, LG 유플러스 현업 도구 
및 현직자 참여 기반 프로젝트 진행을 통해 프로젝트 기획/분석/ 설계 능력을 익힐 수 있습니다."
        >
          <BackSquare />
        </Section>

        <Section
          title="교육안내"
          expl="필요한 것만 쏙쏙, 탄탄하게 준비했습니다"
        ></Section>

        <Section
          title="선발절차"
          expl="서류접수 이후 선발절차"
          subexpl="서류 접수부터 오리엔테이션까지 선발절차를 확인하세요.
더 자세한 날짜는 서류 합격 이후 개별 연락드릴 예정입니다."
        ></Section>

        <Section
          title="자주 묻는 질문"
          expl="궁금한 점이 있으신가요?"
          subexpl="자주 묻는 질문은 아래의 링크를 확인해주시고
문의 사항이 있다면 카카오톡으로 문의해주세요."
        ></Section>
      </Flex>
    </MainContainer>
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
`;

const DummyImg = styled(Flex)`
  flex-direction: column;
  background-color: #5e5a5a;
  flex-shrink: 0;
`;

const UrecaImg = styled.img`
  height: ${({ height }) => (height ? height : '21.25rem')};
`;

const BackSquare = styled(Flex)`
  padding: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;

  border-radius: 1rem;
  border: 1px solid #e8eaff;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.34) 0%,
    rgba(255, 255, 255, 0.11) 0.01%,
    rgba(255, 255, 255, 0.21) 100%
  );
  backdrop-filter: blur(15px);
`;
