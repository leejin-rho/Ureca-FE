import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import { colors } from '@/styles/colors';
import { Text } from '../components/global/Text';
import InputSection from '../components/apply/InputSection';
import {
  TextField,
  Button,
  DropdownField,
  TextFieldAndIcons,
  CombInputField,
} from '../components/apply/ui/InputFieldUi';
import { InputGroup } from '../components/apply/Groups';
import Modal from '../components/apply/ui/Modal';
import { AiOutlineSearch } from 'react-icons/ai';

// Apply Page
function Apply() {
  // 지원자 정보
  const [name, setName] = useState('');
  const [gender, setGender] = useState(false);
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNummber] = useState('');
  const [country, setContry] = useState('');
  const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState('');
  const [
    emergencyPhoneNumberRelationship,
    setEmergencyPhoneNumberRelationship,
  ] = useState('');

  // 고등학교 정보
  const [highSchool, setHighSchool] = useState('');
  const [highSchoolLocation, setHighSchoolLocation] = useState('');
  const [highSchoolType, setHighSchoolType] = useState('');

  // 모달창 오픈 state 변수
  const [highschoolModal, setHighschoolModal] = useState(false);
  const [universityModal, setUniversityModal] = useState(false);

  const clickFunc = () => {};

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
              target="name"
              label={'이름'}
              placeholder="이름을 입력해주세요."
              value={name}
              changeEventFunc={(event) => setName(event.target.value)}
            />
            <Button
              title="성별"
              type="gender"
              buttons={[
                { id: 'male', value: true, text: '남성' },
                { id: 'female', value: false, text: '여성' },
              ]}
            />
          </InputGroup>

          <InputGroup>
            <TextField
              type={'text'}
              target="birth"
              label="생년월일"
              placeholder="생년월일을 입력해주세요. (예시. 0000-00-00)"
              value={birth}
              changeEventFunc={(event) => setBirth(event.target.value)}
            />
            <TextField
              type={'email'}
              target="email"
              label="이메일"
              placeholder="이메일을 입력해주세요."
              value={email}
              changeEventFunc={(event) => setEmail(event.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <TextField
              type={'text'}
              target="phone"
              label="전화번호"
              placeholder="전화번호를 입력해주세요. (예시. 010-0000-0000)"
              value={phoneNumber}
              changeEventFunc={(event) => setPhoneNummber(event.target.value)}
            />
            <TextField
              type={'text'}
              target="country"
              label="국적"
              placeholder="국적을 입력해주세요."
              value={country}
              changeEventFunc={(event) => setContry(event.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <TextField
              type={'text'}
              target="emergencyPhoneNumber"
              label="긴급 전화번호"
              placeholder="비상 시 연락받을 수 있는 번호를 입력해주세요. (예시. 010-0000-0000)"
              value={emergencyPhoneNumber}
              changeEventFunc={(event) =>
                setEmergencyPhoneNumber(event.target.value)
              }
            />
            <TextField
              type={'text'}
              target="emergencyPhoneNumberRelationship"
              label="긴급 전화번호 관계"
              placeholder="긴급 전화번호와의 관계를 입력해주세요."
              value={emergencyPhoneNumberRelationship}
              changeEventFunc={(event) =>
                setEmergencyPhoneNumberRelationship(event.target.value)
              }
            />
          </InputGroup>

          <button onClick={clickFunc}>클릭</button>
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
                { id: 'visited', value: 'true', text: '대면' },
                { id: 'nonVisited', value: 'false', text: '비대면' },
              ]}
            />
          </InputGroup>

          <InputGroup>
            <Button
              title="전공 여부"
              type="supportField"
              buttons={[
                { id: 'major', value: 'true', text: '전공자' },
                { id: 'non-major', value: 'false', text: '비전공자' },
              ]}
            />

            <TextField
              type="text"
              target="path"
              label={'지원 경로'}
              placeholder="지원 경로를 입력해주세요."
            />
          </InputGroup>
        </div>
      </InputSection>

      {/* 인적 사항 Input Section */}
      <InputSection title={'인적 사항'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <TextField
              type={'text'}
              target="adress"
              label="주소"
              maxWidth={'100%'}
              placeholder="현재 거주하고 계시는 주소를 입력해주세요."
            />
          </InputGroup>
        </div>
      </InputSection>

      {/* 고등학교 Input Section */}
      <InputSection title={'고등학교'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <TextFieldAndIcons
              type={'text'}
              target={'highschool'}
              label="학교명"
              disabled={true}
              icons={<AiOutlineSearch />}
              value={highSchool}
              modalOpenFunc={() => setHighschoolModal(true)}
            />

            {/* <TextField type={'text'} title="adress" text="학교명" /> */}
            <TextField
              type={'text'}
              target="adress"
              label="소재지"
              value={highSchoolLocation}
              disabled={true}
            />
          </InputGroup>

          <InputGroup>
            <TextField
              type={'text'}
              target="highschoolType"
              label="전공 계열"
              value={highSchoolType}
              disabled={true}
            />
            <DropdownField label={'졸업구분'} target="status" />
          </InputGroup>
        </div>
      </InputSection>

      {/* 대학교 Input Section */}
      <InputSection title={'대학교'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <InputGroup>
            <TextFieldAndIcons
              type={'text'}
              target={'university'}
              label="학교명"
              disabled={true}
              icons={<AiOutlineSearch />}
              modalOpenFunc={() => setUniversityModal(true)}
            />

            <TextField type={'text'} target="adress" label="소재지" />
          </InputGroup>

          <InputGroup>
            <TextFieldAndIcons
              type={'text'}
              target={'universityeMajor'}
              label="학과"
              disabled={true}
              icons={<AiOutlineSearch />}
              // modalOpenFunc={() => setHighschoolModal(true)}
            />

            {/* <TextField type={'text'} target="adress" label="학과" /> */}

            <DropdownField label={'전공 계열'} target="dummey" />
          </InputGroup>

          <InputGroup>
            <CombInputField label={'전체평점'} />
            <DropdownField label={'졸업구분'} target="status" />
          </InputGroup>
        </div>
      </InputSection>

      {/* 어학 / 자격 / 기타 Input Section */}

      {/* 경력 사항 Input Section */}

      {/* 자기소개서 Input Section */}

      {/* Modal */}
      {highschoolModal && (
        <Modal
          setOpen={setHighschoolModal}
          gubun={'high_list'}
          setName={setHighSchool}
          setLocation={setHighSchoolLocation}
          setType={setHighSchoolType}
        />
      )}
      {universityModal && <Modal setOpen={setUniversityModal} />}
    </>
  );
}

export default Apply;
