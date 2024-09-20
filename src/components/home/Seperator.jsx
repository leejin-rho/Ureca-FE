import styled from '@emotion/styled';

const Seperator = () => {
  return <SeperateLine />;
};

export default Seperator;

const SeperateLine = styled.div`
  display: flex;
  width: 100%;
  stroke-width: 1px;
  stroke: #19191d;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
