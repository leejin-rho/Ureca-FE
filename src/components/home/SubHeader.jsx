import styled from '@emotion/styled';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import { colors } from '@/styles/colors';
import Background from '@/assets/images/pngs/home-background.png';
import { Button } from '@components/global/Button';

const Subheader = () => {
  return (
    <BackImgDiv direction="column">
      <BackgroundImg src={Background} />
      <TopInfoDiv>
        <Flex direction="column" height="fit-content">
          <Text color={colors.white} variant="h1">
            LG U+ 유레카 아카데미 2기
          </Text>
          <Text color={colors.white} variant="h3">
            디지털 세상에서 일하는 방식을 체험하자
          </Text>
        </Flex>
        <Button
          bgi={colors.glass}
          bg={colors.glass}
          hbgi={colors.glassHover}
          hoverBg={colors.glass}
          isBorder={true}
          fontSize="16px"
          fontColor={colors.white}
          width="10rem"
          height="3.6rem"
        >
          지원하기
        </Button>
      </TopInfoDiv>
    </BackImgDiv>
  );
};

export default Subheader;

const BackImgDiv = styled(Flex)`
  flex-direction: column;
  height: 470px;
  gap: 0.625rem;
  flex-shrink: 0;
`;

const TopInfoDiv = styled(Flex)`
  flex-direction: column;
  z-index: 1;
  gap: 1.8rem;
`;

const BackgroundImg = styled.img`
  position: absolute;
  width: 100%;
`;
