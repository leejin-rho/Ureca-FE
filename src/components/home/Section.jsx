import styled from '@emotion/styled';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';
import Seperator from '@components/home/Seperator';

const Section = () => {
  return (
    <>
      <SectionContainer>
        <Text color={colors.primaryColor}>교육 목표</Text>
      </SectionContainer>
      <Seperator />
    </>
  );
};

export default Section;

const SectionContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 6.25rem 8.125rem;
  align-items: flex-start;
  gap: 3.125rem;
  background-color: black;
`;
