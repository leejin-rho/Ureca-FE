import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Curriculum from '@components/home/Curriculum';
import Curriculums from '@assets/data/Curriculums.json';

const FrontendCurriculum = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    if (wrapperRef.current) {
      wrapperRef.current.classList.add('visible');
    }
  }, []);

  return (
    <CurriculumTrans
      ref={wrapperRef}
      title={'프론트엔드'}
      data={Curriculums.FrontData}
    />
  );
};

export default FrontendCurriculum;

export const CurriculumTrans = styled(Curriculum)`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
