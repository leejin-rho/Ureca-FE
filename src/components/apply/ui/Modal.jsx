import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Text } from '../../global/Text';

import {
  AiOutlineClose,
  AiFillExclamationCircle,
  AiOutlineSearch,
} from 'react-icons/ai';
import { colors } from '../../../styles/colors';
import { TextFieldAndIcons } from './InputFieldUi';
import axios from 'axios';

function Modal({ open, setOpen, gubun, setName, setLocation, setType }) {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const onCloseModal = () => {
    setOpen(false);
  };

  // 학교 검색 후 결과
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (search.length < 2) alert('두 글자 이상 입력해 주세요.');
    else {
      await axios
        .get(
          `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=${
            import.meta.env.VITE_SCHOOL_INFO_API
          }&svcType=api&svcCode=SCHOOL&contentType=json&gubun=${gubun}&searchSchulNm=${search}`,
        )
        .then((res) => res.data.dataSearch.content)
        .then((data) => {
          setData(data);
        });
    }
  };

  const selectedSchoolInfo = (school, adress, gubun) => {
    setName(school);
    setLocation(adress);
    setType(gubun);
    onCloseModal();
  };

  return (
    <ModalExternalArea>
      <ModalContainer>
        <ModalHeader>
          {/* <HeaderTitle>국적 검색</HeaderTitle> */}
          <Text color={colors.primaryColor} variant="h4">
            학교 검색
          </Text>
          <StyledCloseIcon onClick={onCloseModal} />
        </ModalHeader>
        <ModalContent>
          <div>
            <Explanation>
              <p>
                <AiFillExclamationCircle />
                검색 버튼을 눌러 학교명을 선택하여 주시기 바랍니다.
              </p>
            </Explanation>

            <form onSubmit={onSubmitHandler} style={{ marginBottom: 10 }}>
              <TextFieldAndIcons
                type={'text'}
                icons={<AiOutlineSearch />}
                placeholder="두 글자 이상 입력해 주세요."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
              />
            </form>

            <div>
              {data.length > 0 &&
                data.map((element) => (
                  <DataItem
                    key={element.seq}
                    onClick={() =>
                      selectedSchoolInfo(
                        element.schoolName,
                        element.adres.split(',')[0].split('(')[0],
                        element.schoolGubun,
                      )
                    }
                  >
                    <DataText size={'14px'}>{element.schoolName}</DataText>
                    <DataText>
                      {element.adres.split(',')[0].split('(')[0]}
                    </DataText>
                  </DataItem>
                ))}
            </div>
          </div>
        </ModalContent>
        <ModalFooter onClick={onCloseModal}>닫기</ModalFooter>
      </ModalContainer>
      <ModalExternalArea onClick={onCloseModal} />
    </ModalExternalArea>
  );
}

// 모달 외부 영역
const ModalExternalArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

// 모달 영역
const ModalContainer = styled.div`
  position: absolute;
  background-color: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 1rem;
  width: 46rem;
  overflow: hidden;
  z-index: 1000;
`;

const Explanation = styled.div`
  margin: 1rem 0;

  p {
    line-height: normal;
    font-size: 1.4rem;
    color: #6b6b6b;
    display: flex;
    gap: 5px;
    align-items: center;
  }
`;

// 모달 헤더 영역
const ModalHeader = styled.div`
  padding: 2.5rem 3rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  cursor: pointer;
`;

// 모달 콘텐츠 영역
const ModalContent = styled.div`
  padding: 1rem 3rem 4rem;
  max-height: calc(93vh - 17rem);
  overflow-x: hidden;
  overflow-y: auto;
`;

// 모달 하단 영역
const ModalFooter = styled.div`
  height: 4rem;
  font-size: 16px;
  background-color: #000;
  color: #fff;
  line-height: 4rem;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
`;

const DataItem = styled.div`
  padding: 0.8rem 1.6rem;
  border-radius: 0.8rem;
  border: 1px solid transparent;
  display: flex;
  cursor: pointer;

  :hover {
    background-color: #b0b5bd1e;
  }
`;

const DataText = styled.span`
  font-size: 14px;
  cursor: pointer;

  :first-of-type {
    margin-right: 10px;
  }

  :last-child {
    color: #a6a6a6;
    font-size: 10px;
  }
`;

export default Modal;
