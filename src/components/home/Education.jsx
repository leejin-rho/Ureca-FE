import styled from '@emotion/styled';
import Section from '@components/home/Section';
import EducationBox from './EducationBox';

const Education = () => {
  const FrontExpl = [
    'Javascript 기반의 프로그램 학습',
    'React Framework의 핵심 개념 모듈 이해를 기반으로 한 간편한 웹 애플리케이션 개발',
    '학습 프론트엔드 개발자가 백엔드의 개발 방식을 이해하여 협업과 문제해결 역량 강화',
    '웹 Security 개념 및 웹 애플리케이션 취약점에 대한 이해',
    '프로젝트를 위한 애자일 방법론 습득 및 활용 학습',
  ];

  const BackExpl = [
    'Java 기반의 프로그램 학습',
    'Spring Framework의 핵심 개념 모듈 이해를 기반으로 한 간편한 웹 애플리케이션 개발 학습',
    '백엔드 개발자가 프론트엔드의 개발 방식을 이해하여 협업과 문제해결 역량 강화',
    '정형 DBMS 및 비정형 NoSQL 개념 및 JPA/ORM DB 활용을 위한 역량 강화',
    'Dauth 인증 및 MSA 기반의 클라우드 서비스의 이해 및 활용',
    '프로젝트를 위한 애자일 방법론 습득 및 활용 역량',
  ];

  return (
    <Section
      title="교육안내"
      expl="필요한 것만 쏙쏙, 탄탄하게 준비했습니다"
      subexpl="유플러스에서 직접 커리큘럼을 구성했습니다."
    >
      <Wrapper>
        <EducationBox
          title="프론트엔드 개발자"
          explList={FrontExpl}
          type="frontend-curriculum"
        />
        <EducationBox
          title="백엔드 개발자"
          explList={BackExpl}
          type="backend-curriculum"
        />
      </Wrapper>
    </Section>
  );
};

export default Education;

const Wrapper = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
