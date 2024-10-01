import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex, Text, TextInput } from '@components/global';
import { Button } from '@components/global';

const FindApply = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [numInput, setNumInput] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/my-apply', {
      state: { name: nameInput, email: emailInput, number: numInput },
    });
  };

  return (
    <MainContainer>
      <Title variant="h2">지원 확인하기</Title>
      <SeperateLine />
      <InputList direction="column" webGap="1.2">
        <InputLine>
          <InputType variant="h6">성명</InputType>
          <TextInput value={nameInput} setValue={setNameInput} />
        </InputLine>
        <SeperateInput />
        <InputLine>
          <InputType variant="h6">이메일</InputType>
          <TextInput value={emailInput} setValue={setEmailInput} />
        </InputLine>
        <SeperateInput />
        <InputLine>
          <InputType variant="h6">비밀번호</InputType>
          <TextInput value={numInput} setValue={setNumInput} />
        </InputLine>
      </InputList>
      <SeperateLine />
      <Button
        bg={colors.primaryColor}
        fontColor={colors.white}
        hoverBg={'#BC1773'}
        fontSize={'1.2rem'}
        width="12rem"
        height="2.8rem"
        onClick={handleLogin}
      >
        로그인
      </Button>
    </MainContainer>
  );
};

export default FindApply;

const MainContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  padding: 120px 90px;

  @media (max-width: 1023px) {
    padding: 62px 0 0 0;
  }
`;

const InputList = styled(Flex)`
  margin: 3.5rem;
  width: 700px;
`;

const Title = styled(Text)`
  font-weight: 500;
`;

const InputType = styled(Text)`
  width: 100px;
`;

const InputLine = styled(Flex)`
  justify-content: space-between;
`;

const SeperateLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${colors.disabled};
  margin: 1.5rem 0;
`;

const SeperateInput = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
`;
