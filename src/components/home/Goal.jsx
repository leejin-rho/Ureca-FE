import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import Section from '@components/home/Section';
import { PNGImage } from '@components/global/PNGImage';
import { GlassBox } from '@components/global/GlassBox';
import UrecaImage from '@assets/images/pngs/URECA.png';
import Information from '@assets/data/Information.json';

const Goal = () => {
  return (
    <Section
      title="교육 목표"
      expl="이동통신 서비스 기업 LG U+가
유레카 아카데미를 운영하는 이유"
      subexpl="현업 수요에 따른 커리큘럼과, 융합 프로젝트를 통한 역량을 강화하고, 
프로젝트 중심 교육과 LG유플러스 현업 멘토링을 통해 실무형 인재로 거듭날 수 있습니다."
    >
      <Wrapper direction="column">
        <PNGImage
          src={UrecaImage}
          alt="ureca"
          height="24rem"
          widthMobile="100%"
          heightMobile="fit-content"
        />
        <GoalList>
          {Information.GoalData.map((item) => (
            <GoalBox
              key={item.id}
              padding="1.25rem"
              width="20"
              mobileGap="0.25"
            >
              <TextList>
                <Text
                  color={item.id == 0 ? colors.primaryColor : colors.white}
                  variant="h7"
                  mobileTypo="h9"
                >
                  유
                </Text>
                <Text
                  color={item.id == 1 ? colors.primaryColor : colors.white}
                  variant="h7"
                  mobileTypo="h9"
                >
                  레
                </Text>
                <Text
                  color={item.id == 2 ? colors.primaryColor : colors.white}
                  variant="h7"
                  mobileTypo="h9"
                >
                  카
                </Text>
              </TextList>
              <ExplList>
                {item.expl.map((e, index) => (
                  <li key={index}>
                    <Text
                      color={colors.white}
                      variant="h9"
                      textAlign="flex-start"
                      lineHeight="150%"
                      mobileTypo="h10"
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
    </Section>
  );
};

export default Goal;

const Wrapper = styled(Flex)`
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.75rem;
`;

const GoalList = styled.div`
  display: grid;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  gap: 1.75rem;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 0;

  @media (max-width: 1023px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0.75rem;
  }
`;

const GoalBox = styled(GlassBox)`
  position: relative;
`;

const TextList = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  gap: 0.05rem;
  margin-left: 0.125rem;
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
