import styled from '@emotion/styled';
import { Flex } from '@components/global/Flex';
import InfoBox from './InfoBox';
import Information from '@/assets/data/Information.json';

const InfoList = () => {
  return (
    <ListContainer>
      {Information.InfoData.map((item) => (
        <InfoBox
          key={item.id}
          title={item.title}
          ans={item.ans}
          expl={item.expl}
        />
      ))}
    </ListContainer>
  );
};

export default InfoList;

const ListContainer = styled(Flex)`
  margin-top: 6.15rem;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1.66rem;
`;
