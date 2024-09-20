import styled from '@emotion/styled';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';
import Seperator from '@components/home/Seperator';

const Section = ({ title, expl }) => {
  return (
    <>
      <SectionContainer>
        <HeadBox>
          <TitleBox>
            <Text color={colors.primaryColor} variant="h4" lineHeight="120%">
              {title}
            </Text>
            <Text color={colors.white} variant="h2">
              {expl}
            </Text>
          </TitleBox>
        </HeadBox>
      </SectionContainer>
      <Seperator />
    </>
  );
};

export default Section;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6.25rem 8.125rem;
  align-items: center;
  justify-content: center;
  gap: 3.125rem;
  background-color: black;
`;

const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 64.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;
