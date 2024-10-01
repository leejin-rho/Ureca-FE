import { useEffect } from 'react';
import Curriculum from '@components/home/Curriculum';
import Curriculums from '@assets/data/Curriculums.json';

const BackendCurriculum = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Curriculum title={'백엔드'} data={Curriculums.BackData} />;
};

export default BackendCurriculum;
