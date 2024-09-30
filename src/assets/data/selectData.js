export const options = {
  status: ['선택해주세요', '졸업', '수료', '졸업 예정', '중퇴'],
  scroeList: ['선택해주세요', '4.0', '4.3', '4.5'],
  universityType: [
    '선택해주세요',
    '교육계열',
    '의약계열',
    '예체능계열',
    '공학계열',
    '사회계열',
    '인문계열',
    '자연계열',
  ],
  careerType: ['선택해주세요', '아르바이트', '인턴', '비정규직', '정규직'],
  questions: [
    {
      message:
        '1. K-Digital Traning 과정을 수강하신 적이 있습니까? (※ KDT 과정 수강 이력 확인 방법 : HRD-net > 나의 정보 > 나의 훈련 > 직업훈련이력 > K- 디지털 트레이닝 혹은 4차 산업혁명 인력양성 표시가 있으면 KDT 과정에 해당)',
      type: 'question1',
      buttons: [
        {
          id: 'questions1-true',
          value: true,
          text: '예',
        },
        {
          id: 'questions1-false',
          value: false,
          text: '아니요',
        },
      ],
    },
    {
      message:
        '2. 본 과정은 하루 8시간, 24.06.10 - 24.12.24까지 진행됩니다. 참여하는데 일정 상의 문제가 없습니까?',
      type: 'question2',
      buttons: [
        {
          id: 'questions2-true',
          value: true,
          text: '예',
        },
        {
          id: 'questions2-false',
          value: false,
          text: '아니요',
        },
      ],
    },
    {
      message:
        "3. 본 과정은 '국민 평생 직업 능력개발법' 에 의거, 국내 거주자를 대상으로 진행되며 해외 거주자 확인 시 강제 퇴소 및 불이익이 있을 수 있습니다.",
      type: 'question3',
      buttons: [
        {
          id: 'questions3-ture',
          value: true,
          text: '예',
        },
        {
          id: 'questions3-false',
          value: false,
          text: '아니요',
        },
      ],
    },
    {
      message:
        '4. 본 과정은 취업을 준비하는 고등학교 및 대학교 졸업(예정)자, 재학생의 경우 졸업까지 수업 연한이 2년 이내인 휴학생의 경우 지원 가능합니다.',
      type: 'question4',
      buttons: [
        {
          id: 'questions4-true',
          value: true,
          text: '예',
        },
        {
          id: 'questions4-false',
          value: false,
          text: '아니요',
        },
      ],
    },
    {
      message:
        '5. 서류 합격 후 SW 적성진단 진행 시 부정행위 방지를 위해 웹캠이나 노트북 내장 카메라를 소지해야 합니다. 사전에 준비 부탁드립니다.',
      type: 'question5',
      buttons: [
        {
          id: 'questions5-true',
          value: true,
          text: '예',
        },
        {
          id: 'questions5-false',
          value: false,
          text: '아니요',
        },
      ],
    },
    {
      message:
        '6. 본 교육을 수강하기 위해 교육 시작 7일 전까지 내일배움카드가 필수적으로 발급되어야 합니다. (※내일배움카드 관련 문의 : 고용노동부 1350)',
      type: 'question6',
      buttons: [
        {
          id: 'questions6-true',
          value: true,
          text: '예',
        },
        {
          id: 'questions6-false',
          value: false,
          text: '아니요',
        },
      ],
    },
    {
      message:
        '7. 위 내용을 모두 확인하였으며, 사실과 다른 경우 수강이 취소될 수 있습니다.',
      type: 'question7',
      buttons: [
        {
          id: 'questions7-true',
          value: true,
          text: '예',
        },
        {
          id: 'questions7-false',
          value: false,
          text: '아니요',
        },
      ],
    },
  ],
};

//
//
//
//
//
//
