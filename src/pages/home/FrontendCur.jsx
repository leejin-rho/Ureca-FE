import Curriculum from '@components/home/Curriculum';
import Curriculums from '@assets/data/Curriculums.json';
import { useEffect } from 'react';

const FrontendCurriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Curriculum title={'프론트엔드'} data={Curriculums.FrontData} />;
};

export default FrontendCurriculum;
