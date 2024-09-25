import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import { PNGImage } from '@components/global//PNGImage';
import { GlassBox } from '@components/global/GlassBox';
import UrecaImage from '@/assets/images/pngs/URECA.png';
import Information from '@/assets/data/Information.json';

const Goal = () => {
  return (
    <Wrapper direction="column">
      <PNGImage src={UrecaImage} />
      <GoalList>
        {Information.GoalData.map((item) => (
          <GoalBox key={item.id} padding="2.5rem" width="28">
            <TextList>
              <Text
                color={item.id == 0 ? colors.primaryColor : colors.white}
                variant="h7"
              >
                유
              </Text>
              <Text
                color={item.id == 1 ? colors.primaryColor : colors.white}
                variant="h7"
              >
                레
              </Text>
              <Text
                color={item.id == 2 ? colors.primaryColor : colors.white}
                variant="h7"
              >
                카
              </Text>
            </TextList>
            <ExplList>
              {item.expl.map((e, index) => (
                <li key={index}>
                  <Text
                    color={colors.white}
                    variant="h8"
                    textAlign="flex-start"
                    lineHeight="150%"
                  >
                    {e}
                  </Text>
                </li>
              ))}
            </ExplList>
          </GoalBox>
        ))}
      </GoalList>
    </Wrapper>
  );
};

export default Goal;

const Wrapper = styled(Flex)`
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

const GoalList = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GoalBox = styled(GlassBox)`
  position: relative;
`;

const TextList = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 0.1rem;

  /* position: absolute;
  top: 1rem;
  left: 1.5rem; */
`;

const ExplList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  color: ${colors.white};
  list-style-type: disc;
  padding-left: 1rem;

  word-break: break-all;
  box-sizing: border-box;
`;
