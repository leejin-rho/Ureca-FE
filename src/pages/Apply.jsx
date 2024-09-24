import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { Text } from '../components/global/Text';
import InputSection from '../components/apply/InputSection';
import { Input, Button } from '../components/apply/ui/Ui';
import { ButtonGroups, InputGroup } from '../components/apply/Groups';

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
      <InputSection>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <Input
              type="text"
              title="name"
              text={'이름'}
              maxValue={'41.6rem'}
            />
            <Button
              title="성별"
              type="gender"
              buttons={[
                { id: 'male', value: 'male', text: '남성' },
                { id: 'female', value: 'female', text: '여성' },
              ]}
            />
          </InputGroup>

          <InputGroup>
            <Input type={'text'} title="birth" text="생년월일" />
            <Input type={'email'} title="email" text="이메일" />
          </InputGroup>

          <InputGroup>
            <Input type={'text'} title="phone" text="전화번호" />
            <Input type={'text'} title="country" text="국적" />
          </InputGroup>

          <InputGroup>
            <Input
              type={'text'}
              title="emergencyPhoneNumber"
              text="긴급 전화번호"
            />
            <Input
              type={'text'}
              title="emergencyPhoneNumberRelationship"
              text="긴급 전화번호 관계"
            />
          </InputGroup>
        </div>
      </InputSection>

      {/* 기본 정보 Input Section */}
      <InputSection title={'기본 정보'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <Button
              title="지원 분야"
              type="supportField"
              buttons={[
                { id: 'front', value: 'true', text: '프론트엔드' },
                { id: 'back', value: 'false', text: '백엔드' },
              ]}
            />

            <Button
              title="지원 분야"
              type="supportField"
              buttons={[
                { id: 'front', value: 'true', text: '프론트엔드' },
                { id: 'back', value: 'false', text: '백엔드' },
              ]}
            />
          </InputGroup>

          <InputGroup>
            <Button
              title="지원 분야"
              type="supportField"
              buttons={[
                { id: 'front', value: 'true', text: '프론트엔드' },
                { id: 'back', value: 'false', text: '백엔드' },
              ]}
            />

            <Button
              title="지원 분야"
              type="supportField"
              buttons={[
                { id: 'front', value: 'true', text: '프론트엔드' },
                { id: 'back', value: 'false', text: '백엔드' },
              ]}
            />
          </InputGroup>
        </div>
      </InputSection>

      {/* 인적 사항 Input Section */}
      <InputSection title={'인적 사항'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <Input type={'text'} title="adress" text="주소" />
          </InputGroup>
        </div>
      </InputSection>

      {/* 고등학교 Input Section */}

      {/* 대학교 Input Section */}

      {/* 어학 / 자격 / 기타 Input Section */}

      {/* 경력 사항 Input Section */}

      {/* 자기소개서 Input Section */}
    </>
  );
}

export default Apply;
