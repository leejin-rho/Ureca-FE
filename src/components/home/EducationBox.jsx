import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';

const EducationBox = ({ title, explList }) => {
  return (
    <Wrapper>
      <Text color={colors.white} variant="h7">
        {title}
      </Text>
      <ExplBox>
        {explList &&
          explList.map((expl, index) => (
            <li key={index}>
              <Text color={colors.white} variant="h8" textAlign="start">
                {expl}
              </Text>
            </li>
          ))}
      </ExplBox>
    </Wrapper>
  );
};

export default EducationBox;

const Wrapper = styled(Flex)`
  flex-direction: column;
  width: 34rem;
  height: 32rem;
  padding: 2.25rem 2.25rem;

  align-items: flex-start;
  justify-content: flex-start;
  gap: 2.25rem;
  color: ${colors.white};
  border-radius: 1.875rem;

  background: radial-gradient(
      107.22% 46.37% at 89.33% 77.98%,
      rgba(219, 149, 172, 0.1) 1.7%,
      rgba(219, 149, 172, 0) 100%
    ),
    radial-gradient(
      76.42% 41.04% at 8.83% 4.93%,
      rgba(219, 149, 172, 0.1) 19.61%,
      rgba(219, 149, 172, 0) 100%
    ),
    #262525;
`;

const ExplBox = styled.ul``;
