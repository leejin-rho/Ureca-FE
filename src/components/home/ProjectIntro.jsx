import Section from '@components/home/Section';

import { GlassBox } from '@components/global/GlassBox';

const ProjectIntro = () => {
  return (
    <Section
      title="WHY URECA?"
      expl="LG U+ 유레카 아카데미 프로젝트 소개"
      subexpl="프론트엔드와 백엔드 팀 융합 프로젝트를 통해 소통 및 협업 능력을 키우고, LG 유플러스 현업 도구 및 
현직자 참여 기반 프로젝트 진행을 통해 프로젝트 기획/분석/ 설계 능력을 익힐 수 있습니다."
    >
      <GlassBox />
    </Section>
  );
};

export default ProjectIntro;
