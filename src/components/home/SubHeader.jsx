import styled from '@emotion/styled';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';
import Background from '@/assets/images/pngs/home_background.png';

const Subheader = () => {
  return (
    <BackImgDiv direction="column">
      <BackgroundImg src={Background} />
      <TopInfoDiv>
        <Text color={colors.white} variant="h2">
          LG U+ 유레카 아카데미 2기
        </Text>
        <Text color={colors.white} variant="h4">
          디지털 세상에서 일하는 방식을 체험하자
        </Text>
      </TopInfoDiv>
    </BackImgDiv>
  );
};

export default Subheader;

const BackImgDiv = styled(Flex)`
  flex-direction: column;
  height: 570px;
  gap: 0.625rem;
  flex-shrink: 0;
`;

const TopInfoDiv = styled(Flex)`
  flex-direction: column;
  z-index: 1;
`;

const BackgroundImg = styled.img`
  position: absolute;
  width: 100%;
`;
