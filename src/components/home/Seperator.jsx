import styled from '@emotion/styled';

const Seperator = () => {
  return <SeperateLine />;
};

export default Seperator;

const SeperateLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2px;
  background: radial-gradient(10deg, #19191d 100%, #dadae9 100%, #17171c 100%);
  margin-bottom: 12.5rem;
`;
