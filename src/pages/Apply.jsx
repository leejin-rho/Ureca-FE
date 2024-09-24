import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { Text } from '../components/global/Text';
import InputSection from '../components/apply/InputSection';
import Input from '../components/apply/ui/Input';

// Apply Page
function Apply() {
  return (
    <>
      {/* 타이틀 */}
      <Text
        color={colors.primaryColor}
        variant="h2"
        margin="100px 0 63px 0"
        lineHeight="120%"
      >
        LG U+ URECA 지원
      </Text>

      {/* 개인 정보 Input Section */}
      <InputSection title={'asd'}>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '36px 24px' }}
        >
          <div style={{ display: 'flex' }}>
            <Input />

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>
          </div>

          <div style={{ display: 'flex' }}>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>

            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '8px 0' }}
            >
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name" />
            </div>
          </div>
        </div>
      </InputSection>

      {/* 기본 정보 Input Section */}
      {/* 인적 사항 Input Section */}
      {/* 고등학교 Input Section */}
      {/* 대학교 Input Section */}
      {/* 어학 / 자격 / 기타 Input Section */}
      {/* 경력 사항 Input Section */}
      {/* 자기소개서 Input Section */}
    </>
  );
}

export default Apply;
