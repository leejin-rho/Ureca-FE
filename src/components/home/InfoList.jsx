import styled from '@emotion/styled';
import { Grid } from '@components/global/Grid';
import InfoBox from './InfoBox';
import Information from '@/assets/data/Information.json';

const InfoList = () => {
  return (
    <ListContainer mobileGap="1" repeat="4" repeatMobile="2">
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

const ListContainer = styled(Grid)`
  margin: 3rem;
  flex-direction: row;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
