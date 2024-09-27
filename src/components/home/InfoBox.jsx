import styled from '@emotion/styled';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';

const InfoBox = ({ title, ans, expl }) => {
  return (
    <InfoContainer mobileGap="0.25">
      <Text color={colors.white} variant="h9" mobileTypo="h11">
        {title}
      </Text>
      <Text color={colors.white} variant="h8" mobileTypo="h10">
        {ans}
      </Text>
      <Text
        color={colors.explText}
        variant="h9"
        lineHeight="150%"
        mobileTypo="h11"
      >
        {expl}
      </Text>
    </InfoContainer>
  );
};

export default InfoBox;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 9.5rem;
  padding: 2.5rem 1.57rem;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border-radius: 1.25rem;

  border: 0.1rem solid rgba(255, 255, 255, 0.3);
  background: linear-gradient(rgba(26, 26, 26, 1)),
    linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.05));

  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);

  @media (max-width: 1023px) {
    gap: ${({ mobileGap }) => (mobileGap ? `${mobileGap}rem` : '0')};
    height: 10rem;
  }
`;
