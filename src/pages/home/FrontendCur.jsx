import Curriculum from '@components/home/Curriculum';
import Curriculums from '@assets/data/Curriculums.json';

const FrontendCurriculum = () => {
  return <Curriculum title={'프론트엔드'} data={Curriculums.FrontData} />;
};

export default FrontendCurriculum;
