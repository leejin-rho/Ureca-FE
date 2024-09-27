import styled from '@emotion/styled';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';
import Seperator from '@components/home/Seperator';
import { Flex } from '@components/global/Flex';

const Section = ({ title, expl, subexpl, children }) => {
  return (
    <>
      <SectionContainer mobileGap="5">
        <HeadBox mobileGap="1">
          <TitleBox mobileGap="1">
            <Text color={colors.primaryColor} variant="h6" lineHeight="120%">
              {title}
            </Text>
            <Text color={colors.white} variant="h2" mobileTypo="h4">
              {expl}
            </Text>
          </TitleBox>
          <Text color={colors.white} variant="h5" mobileTypo="h10">
            {subexpl}
          </Text>
        </HeadBox>
        {children}
      </SectionContainer>
      <Seperator />
    </>
  );
};

export default Section;

const SectionContainer = styled(Flex)`
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  padding: 6.25rem 8.125rem;
  align-items: center;
  justify-content: center;
  gap: 6.25rem;
  margin-top: 8rem;

  @media (max-width: 1023px) {
    margin-top: 4rem;
  }
`;

const HeadBox = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const TitleBox = styled(Flex)`
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;
