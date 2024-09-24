import React, { useEffect } from 'react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { Text } from '../components/global/Text';
import InputSection from '../components/apply/InputSection';
import {
  TextField,
  Button,
  DropdownField,
} from '../components/apply/ui/InputFieldUi';
import { InputGroup } from '../components/apply/Groups';

import dummeyData from '../assets/data/dummeyData';

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
            <TextField
              type="text"
              title="name"
              text={'이름'}
              maxWidth={'41.6rem'}
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
            <TextField type={'text'} title="birth" text="생년월일" />
            <TextField type={'email'} title="email" text="이메일" />
          </InputGroup>

          <InputGroup>
            <TextField type={'text'} title="phone" text="전화번호" />
            <TextField type={'text'} title="country" text="국적" />
          </InputGroup>

          <InputGroup>
            <TextField
              type={'text'}
              title="emergencyPhoneNumber"
              text="긴급 전화번호"
            />
            <TextField
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
              title="교육 방식"
              type="supportField"
              buttons={[
                { id: 'front', value: 'true', text: '프론트엔드' },
                { id: 'back', value: 'false', text: '백엔드' },
              ]}
            />
          </InputGroup>

          <InputGroup>
            <Button
              title="전공 여부"
              type="supportField"
              buttons={[
                { id: 'front', value: 'true', text: '프론트엔드' },
                { id: 'back', value: 'false', text: '백엔드' },
              ]}
            />

            <TextField
              type="text"
              title="name"
              text={'지원 경로'}
              maxWidth={'41.6rem'}
            />
          </InputGroup>
        </div>
      </InputSection>

      {/* 인적 사항 Input Section */}
      <InputSection title={'인적 사항'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <TextField type={'text'} title="adress" text="주소" />
          </InputGroup>
        </div>
      </InputSection>

      {/* 고등학교 Input Section */}
      <InputSection title={'고등학교'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <TextField type={'text'} title="adress" text="학교명" />
            <TextField type={'text'} title="adress" text="소재지" />
          </InputGroup>

          <InputGroup>
            <TextField type={'text'} title="adress" text="전공계열" />
            <TextField type={'text'} title="adress" text="졸업구분" />
          </InputGroup>
        </div>
      </InputSection>

      {/* 대학교 Input Section */}
      <InputSection title={'대학교'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <TextField type={'text'} title="adress" text="학교명" />
            <TextField type={'text'} title="adress" text="소재지" />
          </InputGroup>

          <InputGroup>
            <TextField
              type={'text'}
              title="adress"
              text="학과"
              maxWidth={'41.6rem'}
            />

            {dummeyData.map((option, i) => {
              return <DropdownField key={i} options={option} />;
            })}
          </InputGroup>

          <InputGroup>
            <TextField type={'text'} title="adress" text="전체평점" />
            <TextField type={'text'} title="adress" text="졸업여부" />
          </InputGroup>
        </div>
      </InputSection>

      {/* 어학 / 자격 / 기타 Input Section */}

      {/* 경력 사항 Input Section */}

      {/* 자기소개서 Input Section */}
    </>
  );
}

export default Apply;
