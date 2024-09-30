import React, { useEffect } from 'react';

// Style 관련 Module import
import styled from '@emotion/styled';
import { Text } from '../global/Text';
import { colors } from '../../styles/colors.js';

function InputSection({ title, children }) {
  return (
    <SectionContainer>
      {/* 각 세션 타이틀 */}
      {title && (
        <Text color={colors.primaryColor} variant="h4" margin="0 0 2.4rem 0">
          {title}
        </Text>
      )}

      {/* 각 세션별 입력 폼 */}
      {children}
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  width: 85.6rem;
  margin-bottom: 10rem;
`;

export default InputSection;
