import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import axios from 'axios';

import { colors } from '@/styles/colors';
import { Text } from '../components/global/Text';
import InputSection from '../components/apply/InputSection';
import {
  TextField,
  Button,
  DropdownField,
  TextFieldAndIcons,
  CombInputField,
  TextAreaField,
} from '../components/apply/ui/InputFieldUi';
import { InputGroup } from '../components/apply/Groups';
import Modal from '../components/apply/ui/Modal';
import { AiOutlineCalendar, AiOutlineSearch } from 'react-icons/ai';
import { options } from '../assets/data/selectData';
import EtcListSection from '../components/apply/Section/EtcListSection';
import CareerListSection from '../components/apply/Section/CareerListSection';

// Apply Page
function Apply() {
  // 지원자 정보
  const [name, setName] = useState('');

  const [gender, setGender] = useState(false);
  const [genderActiveBtn, setGenderActiveBtn] = useState(null);

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

  // 대학교 정보
  const [university, setUniversity] = useState('');
  const [universityLocation, setUniversityLocation] = useState('');
  const [universityeDpartment, setUniversityeDpartment] = useState('');
  const [universityMajor, setUniversityMajor] = useState('');

  // 선택한 전공 계열에 속한 학과 목록
  const [majorDataList, setMajorDataList] = useState({});

  // 어학 / 자격 / 기타 관련 state 변수
  const [certificateListItems, setCertificateListItems] = useState([
    {
      id: 1,
      inputs: [
        {
          type: 'text',
          placeholder: '자격증명을 입력해주세요.',
          value: '',
          name: 'certificateName',
        },
        {
          type: 'text',
          placeholder: '자격증 등급을 입력해주세요.',
          value: '',
          name: 'certificateGrade',
        },
        {
          type: 'text',
          placeholder: '0000.00.00',
          value: '',
          name: 'certificateDateAcquired',
          disabled: true,
          icons: <AiOutlineCalendar />,
          showDatePicker: false,
        },
        {
          type: 'text',
          placeholder: '인증기관을 입력해주세요.',
          value: '',
          name: 'issuingOrganization',
        },
      ],
    },
  ]);

  const [awardListItems, setAwardListItems] = useState([
    {
      id: 1,
      showDatePicker: false,
      inputs: [
        {
          type: 'text',
          placeholder: '대회명을 입력해주세요.',
          value: '',
          name: 'awardName',
        },
        {
          type: 'text',
          placeholder: '수상내역을 입력해주세요.',
          value: '',
          name: 'awardDetails',
        },
        {
          type: 'text',
          placeholder: '0000.00.00',
          value: '',
          name: 'awardDate',
          disabled: true,
          icons: <AiOutlineCalendar />,
        },
        {
          type: 'text',
          placeholder: '수상기관을 입력해주세요.',
          value: '',
          name: 'awardIssuer',
        },
      ],
    },
  ]);

  const [activityListItem, setActivityListItem] = useState([
    {
      id: 1,
      showDatePicker: false,
      inputs: [
        {
          type: 'text',
          placeholder: '활동 내용을 입력해주세요.',
          value: '',
          name: 'activityDescription',
        },
        {
          type: 'text',
          placeholder: '수상내역을 입력해주세요.',
          value: '',
          name: 'activityRole',
        },
        {
          type: 'text',
          placeholder: '시작 날짜를 선택해주세요.',
          value: '',
          name: 'activityStartDate',
          disabled: true,
          icons: <AiOutlineCalendar />,
        },
        {
          type: 'text',
          placeholder: '종료 날짜를 선택해주세요.',
          value: '',
          name: 'activityEndDate',
          disabled: true,
          icons: <AiOutlineCalendar />,
        },
      ],
    },
  ]);

  // 직장 경력 state 변수
  const [careerListItem, setCareerListItem] = useState([
    {
      id: 1,
      inputs: [
        {
          type: 'text',
          label: '직장명',
          placeholder: '직장명을 입력해주세요.',
          value: '',
          name: 'careerName',
        },
        {
          type: 'select',
          label: '직장유형',
          value: '',
          name: 'careerType',
        },
        {
          type: 'text',
          label: '직급',
          placeholder: '직급을 입력해주세요.',
          value: '',
          name: 'careerRank',
        },
        {
          type: 'calendar',
          placeholder: '0000.00.00',
          value: '',
          name: 'careerStartDate',
          disabled: true,
          icons: <AiOutlineCalendar />,
        },
        {
          type: 'calendar',
          placeholder: '0000.00.00',
          value: '',
          name: 'careerEndDate',
          disabled: true,
          icons: <AiOutlineCalendar />,
        },
        {
          type: 'textarea',
          label: '담당업무',
          placeholder: '귀하의 담당 업무 내용을 입력해주세요.',
          value: '',
          name: 'careerDescription',
        },
      ],
    },
  ]);

  const [itLearning, setItLearning] = useState('');

  // 자기소개서
  const [selfIntroduce1, setSelfIntroduce1] = useState('');
  const [selfIntroduce2, setSelfIntroduce2] = useState('');
  const [selfIntroduce3, setSelfIntroduce3] = useState('');

  // 모달창 오픈 state 변수
  const [highschoolModal, setHighschoolModal] = useState(false);
  const [universityModal, setUniversityModal] = useState(false);
  const [universityMajorModal, setUniversityMajorModal] = useState(false);

  // Btn Active 효과 적용 Function
  const handleClick = (event, id) => {
    setGenderActiveBtn(id);
    setGender(JSON.parse(event.target.value));
  };

  // 어학 / 자격 / 기타 추가 버튼 클릭 이벤트 핸들러
  const addCertificateListItems = () => {
    if (certificateListItems.length >= 5) {
      alert('총 5개까지만 작성할 수 있습니다.');
      return;
    }

    setCertificateListItems([
      ...certificateListItems,
      {
        id: certificateListItems.length + 1,

        inputs: [
          {
            type: 'text',
            placeholder: '자격증명을 입력해주세요.',
            value: '',
            name: 'certificateName',
          },
          {
            type: 'text',
            placeholder: '자격증 등급을 입력해주세요.',
            value: '',
            name: 'certificateGrade',
          },
          {
            type: 'text',
            placeholder: '0000.00.00',
            value: '',
            name: 'certificateDateAcquired',
            disabled: true,
            icons: <AiOutlineCalendar />,
            showDatePicker: false,
          },
          {
            type: 'text',
            placeholder: '인증기관을 입력해주세요.',
            value: '',
            name: 'issuingOrganization',
          },
        ],
      },
    ]);
  };

  const addAwardsListItems = () => {
    if (awardListItems.length >= 5) {
      alert('총 5개까지만 작성할 수 있습니다.');
      return;
    }

    setAwardListItems([
      ...awardListItems,
      {
        id: awardListItems.length + 1,
        showDatePicker: false,
        inputs: [
          {
            type: 'text',
            placeholder: '대회명을 입력해주세요.',
            value: '',
            name: 'awardName',
          },
          {
            type: 'text',
            placeholder: '수상내역을 입력해주세요.',
            value: '',
            name: 'awardDetails',
          },
          {
            type: 'text',
            placeholder: '수상일자를 선택해주세요.',
            value: '',
            name: 'awardDate',
            disabled: true,
            icons: <AiOutlineCalendar />,
          },
          {
            type: 'text',
            placeholder: '수상기관을 입력해주세요.',
            value: '',
            name: 'awardIssuer',
          },
        ],
      },
    ]);
  };

  const addActiviteListItems = () => {
    if (activityListItem.length >= 5) {
      alert('총 5개까지만 작성할 수 있습니다.');
      return;
    }

    setActivityListItem([
      ...activityListItem,
      {
        id: activityListItem.length + 1,
        showDatePicker: false,
        inputs: [
          {
            type: 'text',
            placeholder: '활동 내용을 입력해주세요.',
            value: '',
            name: 'activityDescription',
          },
          {
            type: 'text',
            placeholder: '수상내역을 입력해주세요.',
            value: '',
            name: 'activityRole',
          },
          {
            type: 'text',
            placeholder: '시작 날짜를 선택해주세요.',
            value: '',
            name: 'activityStartDate',
            disabled: true,
            icons: <AiOutlineCalendar />,
          },
          {
            type: 'text',
            placeholder: '종료 날짜를 선택해주세요.',
            value: '',
            name: 'activityEndDate',
            disabled: true,
            icons: <AiOutlineCalendar />,
          },
        ],
      },
    ]);
  };

  // 어학 / 자격 / 기타 input 값 변경 이벤트 핸들러
  const handleCertificateInputChange = (itemId, inputName, value) => {
    const updatedItems = certificateListItems.map((item) => {
      if (item.id === itemId) {
        const updatedInputs = item.inputs.map((input) => {
          if (input.name === inputName) {
            return { ...input, value };
          }
          return input;
        });
        return { ...item, inputs: updatedInputs };
      }
      return item;
    });
    setCertificateListItems(updatedItems);
  };

  const handleAwardInputChange = (itemId, inputName, value) => {
    const updatedItems = awardListItems.map((item) => {
      if (item.id === itemId) {
        const updatedInputs = item.inputs.map((input) => {
          if (input.name === inputName) {
            return { ...input, value };
          }
          return input;
        });
        return { ...item, inputs: updatedInputs };
      }
      return item;
    });
    setAwardListItems(updatedItems);
  };

  const handleActivityInputChange = (itemId, inputName, value) => {
    const updatedItems = activityListItem.map((item) => {
      if (item.id === itemId) {
        const updatedInputs = item.inputs.map((input) => {
          if (input.name === inputName) {
            return { ...input, value };
          }
          return input;
        });
        return { ...item, inputs: updatedInputs };
      }
      return item;
    });
    setActivityListItem(updatedItems);
  };

  // 어학 / 자격 / 기타 Section 삭제 이벤트 핸들러
  const deleteCertificateListItem = (itemId) => {
    const updatedItems = certificateListItems.filter(
      (item) => item.id !== itemId,
    );
    setCertificateListItems(updatedItems);
  };

  const deleteAwardListItem = (itemId) => {
    const updatedItems = awardListItems.filter((item) => item.id !== itemId);
    setAwardListItems(updatedItems);
  };

  const deleteActivityListItem = (itemId) => {
    const updatedItems = activityListItem.filter((item) => item.id !== itemId);
    setActivityListItem(updatedItems);
  };

  // 경력사항 추가 버튼 클릭 이벤트 핸들러
  const addCareerListItems = () => {
    if (careerListItem.length >= 5) {
      alert('총 5개까지만 작성할 수 있습니다.');
      return;
    }

    setCareerListItem([
      ...careerListItem,
      {
        id: careerListItem.length + 1,
        showDatePicker: false,
        inputs: [
          {
            type: 'text',
            label: '직장명',
            placeholder: '직장명을 입력해주세요.',
            value: '',
            name: 'careerName',
          },
          {
            type: 'select',
            label: '직장유형',
            value: '',
            name: 'careerType',
          },
          {
            type: 'text',
            label: '직급',
            placeholder: '직급을 입력해주세요.',
            value: '',
            name: 'careerRank',
          },
          {
            type: 'calendar',
            placeholder: '0000.00.00',
            value: '',
            name: 'careerStartDate',
            disabled: true,
            icons: <AiOutlineCalendar />,
          },
          {
            type: 'calendar',
            placeholder: '0000.00.00',
            value: '',
            name: 'careerEndDate',
            disabled: true,
            icons: <AiOutlineCalendar />,
          },
          {
            type: 'textarea',
            label: '담당업무',
            placeholder: '귀하의 담당 업무 내용을 입력해주세요.',
            value: '',
            name: 'careerDescription',
          },
        ],
      },
    ]);
  };

  // 경력사항 input 값 변경 이벤트 핸들러
  const handleCareerInputChange = (itemId, inputName, value) => {
    const updatedItems = careerListItem.map((item) => {
      if (item.id === itemId) {
        const updatedInputs = item.inputs.map((input) => {
          if (input.name === inputName) {
            return { ...input, value };
          }
          return input;
        });
        return { ...item, inputs: updatedInputs };
      }
      return item;
    });
    setCareerListItem(updatedItems);
  };

  // 경력사항 삭제 버튼 클릭 이벤트 핸들러
  const deleteCareerListItem = (itemId) => {
    const updatedItems = careerListItem.filter((item) => item.id !== itemId);
    setCareerListItem(updatedItems);
  };

  // OpenAPI 전국 대학교 학과 데이터 가져오는 로직
  useEffect(() => {
    async function fetchData() {
      const major = {};

      await axios
        .get(
          `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${
            import.meta.env.VITE_SCHOOL_INFO_API
          }&svcType=api&svcCode=MAJOR&contentType=json&gubun=univ_list&univSe=univ&perPage=500`,
        )
        .then((res) => res.data.dataSearch.content)
        .then((data) => {
          data.forEach((item) => {
            if (!major[item.lClass])
              major[item.lClass] = [...item.facilName.split(',')];
            else {
              major[item.lClass] = [
                ...major[item.lClass],
                ...item.facilName.split(','),
              ];
            }
          });
        });

      setMajorDataList(major);
    }

    fetchData();
  }, []);

  return (
    <>
      {/* 타이틀 */}
      <Text
        color={colors.primaryColor}
        variant="h2"
        margin="10rem 0 6.3rem 0"
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
              onClickFunc={handleClick}
              activeButton={genderActiveBtn}
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
              target="highSchoolLocation"
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
            <DropdownField label={'졸업구분'} data={options.status} />
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
              value={university}
            />

            <TextField
              type={'text'}
              target="universityLocation"
              label="소재지"
              value={universityLocation}
              disabled={true}
            />
          </InputGroup>

          <InputGroup>
            <DropdownField
              label={'전공 계열'}
              data={options.universityType}
              setSelectValue={setUniversityeDpartment}
            />

            <TextFieldAndIcons
              type={'text'}
              target={'universityeMajor'}
              label="학과"
              disabled={true}
              icons={<AiOutlineSearch />}
              value={universityMajor}
              modalOpenFunc={() => {
                if (universityeDpartment) {
                  setUniversityMajorModal(true);
                } else {
                  alert('전공 계열을 먼저 선택해주세요.');
                }
              }}
            />

            {/* <TextField type={'text'} target="adress" label="학과" /> */}
          </InputGroup>

          <InputGroup>
            <CombInputField label={'전체평점'} />
            <DropdownField label={'졸업구분'} data={options.status} />
          </InputGroup>
        </div>
      </InputSection>

      {/* 어학 / 자격 / 기타 Input Section */}
      <InputSection title={'어학 / 자격 / 기타'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}
          >
            {/* 자격증 */}
            <EtcListSection
              header="자격증"
              listTitle={['자격증명', '자격등급', '취득일자', '인증기관']}
              listItems={certificateListItems}
              addListItem={addCertificateListItems}
              handleInputChange={handleCertificateInputChange}
              deleteListItems={deleteCertificateListItem}
            />

            {/* 수상 경력 */}
            <EtcListSection
              header="수상경력"
              listTitle={['대회명', '수상내역', '수상일자', '수상기관']}
              listItems={awardListItems}
              addListItem={addAwardsListItems}
              handleInputChange={handleAwardInputChange}
              deleteListItems={deleteAwardListItem}
            />

            {/* 학내외활동 */}
            <EtcListSection
              header="학내외활동"
              listTitle={['활동내용', '직위 또는 역할', '활동기간']}
              listItems={activityListItem}
              addListItem={addActiviteListItems}
              handleInputChange={handleActivityInputChange}
              deleteListItems={deleteActivityListItem}
            />
          </div>
        </div>
      </InputSection>

      {/* 경력 사항 Input Section */}
      <InputSection title={'경력사항'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}
          >
            <CareerListSection
              header={'직장경력'}
              listItems={careerListItem}
              addListItem={addCareerListItems}
              handleInputChange={handleCareerInputChange}
              deleteListItems={deleteCareerListItem}
            />

            {/* 자격증 */}
            {/* <EtcListSection
              header="자격증"
              listTitle={['자격증명', '자격등급', '취득일자', '인증기관']}
              listItems={certificateListItems}
              addListItem={addCertificateListItems}
              handleInputChange={handleCertificateInputChange}
              deleteListItems={deleteCertificateListItem}
            /> */}
          </div>

          <CreerEtcContainer>
            <CareerEtcHeader>
              <h4>추가질문</h4>
            </CareerEtcHeader>

            <TextAreaField
              elements={[
                {
                  message:
                    '질문) IT와 관련된 교육을 수강해 본 이력이 있다면 기술해주십시오.',
                  style: {
                    width: 'calc(100% - 12rem)',
                    wordBreak: 'keep-all',
                  },
                },
                {
                  message: `글자수 ${
                    itLearning.length <= 200 ? itLearning.length : '200'
                  } / 200자`,
                  style: {
                    width: '12rem',
                    color: '#888',
                    textAlign: 'end',
                  },
                },
              ]}
              margin={'3.6rem 0 0 0 '}
              maxWidth={'100%'}
              areaHeight={'13rem'}
              placeholder={'IT 수강 경험을 기술해주십시오.'}
              name="it_learning"
              value={itLearning}
              onChange={(event) => {
                if (itLearning.length <= 200) setItLearning(event.target.value);
                else {
                  setItLearning(itLearning.slice(0, 200));
                }
              }}
            />
          </CreerEtcContainer>
        </div>
      </InputSection>

      {/* 자기소개서 Input Section */}
      <InputSection title={'자기소개서'}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {[
            {
              elements: [
                {
                  message:
                    '1. LG 유플러스 유레카 SW교육에 지원하신 동기와 과정 수료 후, 이루고 싶은 취업 계획을 작성해 주십시오.',
                  style: {
                    width: 'calc(100% - 12rem)',
                    wordBreak: 'keep-all',
                  },
                },
                {
                  message: `글자수 ${
                    selfIntroduce1.length <= 500 ? selfIntroduce1.length : '500'
                  } / 500자`,
                  style: {
                    width: '12rem',
                    color: '#888',
                    textAlign: 'end',
                  },
                },
              ],
              maxWidth: '100%',
              placeholder: '내용을 입력해주세요.',
              name: 'self_introduce1',
              value: selfIntroduce1,
              onChange(event) {
                if (selfIntroduce1.length <= 500)
                  setSelfIntroduce1(event.target.value);
                else {
                  setSelfIntroduce1(selfIntroduce1.slice(0, 500));
                }
              },
            },
            {
              elements: [
                {
                  message:
                    '[비전공생] 2-1. SW에 관심을 가지게 된 계기 혹은 취업 준비를 하며 겪었던 경험에 대해 작성하고, LG 유플러스 유레카 SW교육 과정을 통해 향후 어떤 개발자로 성장하고 싶은지 작성해 주십시오.',
                  style: {
                    width: 'calc(100% - 12rem)',
                    wordBreak: 'keep-all',
                  },
                },
                {
                  message: `글자수 ${
                    selfIntroduce2.length <= 500 ? selfIntroduce2.length : '500'
                  } / 500자`,
                  style: {
                    width: '12rem',
                    color: '#888',
                    textAlign: 'end',
                  },
                },
              ],
              maxWidth: '100%',
              placeholder: '내용을 입력해주세요.',
              name: 'self_introduce2',
              value: selfIntroduce2,
              onChange(event) {
                if (selfIntroduce2.length <= 500)
                  setSelfIntroduce2(event.target.value);
                else {
                  setSelfIntroduce2(selfIntroduce2.slice(0, 500));
                }
              },
            },
            {
              elements: [
                {
                  message: `[전공생] 2-2. SW 관련 경험 중 어려웠던 과제와 해결 방안에 대해 작성하고, LG 유플러스 유레카 SW교육 과정을 통해 향후 어떤 개발자로 성장하고 싶은지 작성해 주십시오.(※SW 관련 경험 : SW 개발, SW 프로젝트 및 경진대회 경험, IT 관련 자격증 취득 등)`,
                  style: {
                    width: 'calc(100% - 12rem)',
                  },
                },
                {
                  message: `글자수 ${
                    selfIntroduce3.length <= 500 ? selfIntroduce3.length : '500'
                  } / 500자`,
                  style: {
                    width: '12rem',
                    color: '#888',
                    textAlign: 'end',
                  },
                },
              ],
              maxWidth: '100%',
              placeholder: '내용을 입력해주세요.',
              name: 'self_introduce3',
              value: selfIntroduce3,
              onChange(event) {
                if (selfIntroduce3.length <= 500)
                  setSelfIntroduce3(event.target.value);
                else {
                  setSelfIntroduce3(selfIntroduce3.slice(0, 500));
                }
              },
            },
          ].map((element, idx) => {
            return (
              <TextAreaField
                key={element.name}
                elements={element.elements}
                maxWidth={element.maxWidth}
                name={element.name}
                placeholder={element.placeholder}
                value={element.value}
                onChange={element.onChange}
              />
            );
          })}
        </div>
      </InputSection>

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

      {universityModal && (
        <Modal
          setOpen={setUniversityModal}
          gubun={'univ_list'}
          setName={setUniversity}
          setLocation={setUniversityLocation}
        />
      )}

      {universityMajorModal && (
        <Modal
          title={'학과 검색'}
          info={[
            '검색 버튼을 눌러 지원자님의 학과를 선택하여 주시기 바랍니다.',
            '또는 직접 스크롤하여 학과를 선택하여 주시기 바랍니다.',
          ]}
          listData={majorDataList[universityeDpartment]}
          setOpen={setUniversityMajorModal}
          setMajor={setUniversityMajor}
          placeholder={'학과를 입력해 주세요.'}
        />
      )}

      <button onClick={() => console.log(certificateListItems)}>제출</button>
    </>
  );
}

export default Apply;

const CreerEtcContainer = styled.div`
  font-family: 'Pretendard', sans-serif;

  & > * {
    box-sizing: border-box;
  }
`;

const CareerEtcHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1.2rem;
    display: block;
    height: 2px;
    background-color: #888;
    width: 100%;
    border-radius: 1px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
  }
`;
