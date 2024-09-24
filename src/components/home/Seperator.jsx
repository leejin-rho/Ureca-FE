import styled from '@emotion/styled';
import { colors } from '@/styles/colors';

const Seperator = () => {
  return <SeperateLine />;
};

export default Seperator;

const SeperateLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2px;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin-top: 12.5rem;
`;
