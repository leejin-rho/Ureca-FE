import Curriculum from '@components/home/Curriculum';
import Curriculums from '@assets/data/Curriculums.json';

const BackendCurriculum = () => {
  return <Curriculum title={'백엔드'} data={Curriculums.BackData} />;
};

export default BackendCurriculum;
