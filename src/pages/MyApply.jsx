import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colors';
import { Flex } from '@components/global/Flex';
import { getApplyInfo } from '@/apis/getApplyApi';

const MyApply = ({ name, email, number }) => {
  const [applyInfo, setApplyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchApplyInfo = async () => {
      setLoading(true);
      try {
        const info = { name, email, number };
        const data = await getApplyInfo(info);
        setApplyInfo(data);
      } catch (error) {
        console.error('Error fetching apply info:', error);
        alert('지원한 적 없는 정보입니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplyInfo();
  }, []);

  if (loading) {
    return <p>로딩 중...</p>;
  }

  return (
    <MainContainer>
      <h2>지원 정보</h2>
      {applyInfo ? (
        <Flex direction="column">
          <p>성명: {applyInfo.name}</p>
          <p>이메일: {applyInfo.email}</p>
          <p>전화번호: {applyInfo.number}</p>
        </Flex>
      ) : (
        <p>지원 정보를 찾을 수 없습니다.</p>
      )}
    </MainContainer>
  );
};

export default MyApply;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 72px 0 0 0;

  @media (max-width: 1023px) {
    padding: 62px 0 0 0;
  }
`;
