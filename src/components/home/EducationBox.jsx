import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { Text } from '@components/global/Text';
import SendIcon from '@/assets/images/svgs/Send';
import { useNavigate } from 'react-router-dom';

const EducationBox = ({ title, explList, type }) => {
  const navigate = useNavigate();

  const handleCuriBtn = () => {
    navigate(`/${type}`);
  };


  return (
    <Wrapper>
      <Text color={colors.white} variant="h6" style={{ fontWeight: 700 }}>
        {title}
      </Text>
      <ExplBox>
        {explList &&
          explList.map((expl, index) => (
            <li key={index}>
              <Text
                color={colors.white}
                variant="h8"
                textAlign="start"
                mobileTypo="h9"
              >
                {expl}
              </Text>
            </li>
          ))}
      </ExplBox>

      <EduLink onClick={handleCuriBtn}>
        <Text color="#cecece" variant="h8" mobileTypo="h9">
          커리큘럼 상세보기
        </Text>
        <SendIcon height="14px" />
      </EduLink>
    </Wrapper>
  );
};

export default EducationBox;

const Wrapper = styled(Flex)`
  position: relative;
  flex-direction: column;
  width: 28rem;
  height: 24rem;
  padding: 1.75rem;

  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 1.25rem;
  box-sizing: border-box;

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

  @media (max-width: 1023px) {
    width: 100%;
    height: fit-content;
    padding-bottom: 85px;
  }
`;

const ExplBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${colors.white};
  list-style-type: disc;
  padding: 0 1rem;
  line-height: 170%;
  margin-top: 1rem;
  word-break: break-all;
  box-sizing: border-box;
  gap: 0.25rem;
`;

const EduLink = styled.div`
  display: flex;
  position: absolute;
  width: 100%;

  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  align-items: center;
  justify-content: flex-end;
  gap: 0.25rem;
  right: 2.25rem;
  bottom: 1.875rem;

  &:hover {
    cursor: pointer;
  }
`;
