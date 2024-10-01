import { useEffect, useRef } from 'react';
import Curriculum from '@components/home/Curriculum';
import Curriculums from '@assets/data/Curriculums.json';
import { CurriculumTrans } from './FrontendCur';

const BackendCurriculum = () => {
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
      title={'백엔드'}
      data={Curriculums.BackData}
    />
  );
};

export default BackendCurriculum;
