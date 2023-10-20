export const MEITALK_INFO = [
  {
    title: 'Meitalk',
    date: '2022.07 - 2023.07',
    href: 'https://meitalktv.com/',
    skills: 'Skills',
    skill_list:
      'React, React Native, TypeScript, Styled-component, Redux, Redux-Toolkit',
    video: '구현영상',
  },
];

export const MEITALK_WORKS = [
  {
    title: '비디오 업로드 기능 구현(Web)',
    sub_1: {
      sub_title: '1GB 이하 비디오 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(web)-1',
      problem: '이슈',
      problem_list: [
        '500mb 이상 업로드 도중 멈춤 및 속도 저하 발생 (700mb 비디오 기준 → 4min 이상 소요)',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'base64 형식이 아닌 URL.createObjectURL 메서드를 사용해 blob객체의 url 사용',
        '업로드 속도 향상 (700mb 기준 → 1min 이하 소요)',
        '메모리 누수 방지 (revokeObjectURL 메서드로 업로드 후 메모리 해제)',
      ],
    },
    sub_2: {
      sub_title: '1GB 이상 비디오 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(web)-2',
      problem: '이슈',
      problem_list: [
        '1gb 이상 비디오 업로드 (제한용량 1gb → 5gb 기획안 변경)',
        '일정 용량 (1.5gb)이상 업로드 시 간헐적 네트워크 오류로 요청 끊김 및 화면 멈춤',
        '대용량 파일을 서버로 한번에 업로드하여 OOM(Out of Memory Exception) 발생',
      ],
      solution: '개선 및 성과',
      solution_list: [
        '파일 업로드를 효율적으로 관리 및 업로드할 수 있는 Tus-protocol 백엔드에 제안 및 적용',
        'chunk 단위로 분할 업로드하여 OOM(Out of Memory Exception) 이슈 방지',
        '업로드 시간 70%이상 단축, 1gb - 5gb이상 비디오 업로드 기능 구현',
        '1gb기준 2min → 40sec 단축',
        '5gb기준 2min 이하 소요',
      ],
    },
  },
  {
    title: '비디오 업로드 기능 구현(App)',
    sub_1: {
      sub_title: 'Client 구현',
      sub_href:
        'https://river-dev.vercel.app/posts/video-upload(app)-3#1-uploadapi-%ED%95%A8%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0',
      problem: '이슈',
      problem_list: [
        '클라이언트에서 메모리 문제로 100mb이상 업로드 실패',
        'tus-js-client가 문제라 판단해 react-native-tus-client 등 다른 라이브러리로 재시도 했지만 실패',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'tus 프로토콜 공식 문서를 분석해, tus-js-client와 동일한 기능을 제공하는 Client 직접 개발 및 업로드',
        '정확한 offset과 chunk 값을 계산하여 업로드 요청이 끊겨도 중단된 위치 추적 및 재개 가능하도록 개발',
      ],
    },
    sub_2: {
      sub_title: 'IOS 대용량 파일 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(app)-4',
      problem: '이슈',
      problem_list: [
        '일정 용량(2.5gb) 이상 업로드 시 offset 값을 읽지 못하고 앱 튕김 현상 발생',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'Object-C로 구현된 RNFS 라이브러리의 기존 int 타입을 patch-package라이브러리를 활용하여 unsigned long 타입으로 수정 → IOS에서 메모리 문제 해결 및 업로드 성공',
      ],
    },
    sub_3: {
      sub_title: 'Picker 개선',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(app)-5',
      problem: '이슈',
      problem_list: [
        'IOS에서 대용량 파일을 읽지 못하고 오래 걸리는 이슈 → 4gb기준 20min 이상 소요',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'IOS와 안드로이드 각각 picker를 분기처리하여, 90%이상 시간 단축',
        '4gb기준 30min → 3sec 소요',
      ],
    },
  },
  {
    title: '구조개선 및 리뉴얼',
    sub_1: {
      problem: '이슈',
      sub_href: 'https://river-dev.vercel.app/posts/develop-components',
      problem_list: [
        '미비한 컴포넌트 설계 기준과 컴포넌트 파편화로 불필요한 유지보수 발생',
      ],
      solution: '개선 및 성과',
      solution_list: [
        '각 화면의 유형을 명시적으로 설정한 컴포넌트를 구현해 관련 section 유지보수 시간 50%이상 절감',
      ],
    },
    sub_2: {
      problem: '이슈',
      problem_list: [
        'FAQ 페이지에서 레거시 코드 및 Props로만 상태관리하여 Props Drilling 발생',
      ],
      solution: '개선 및 성과',
      solution_list: ['Redux로 전역 상태관리하여 Props Drilling 해결'],
    },
  },
  {
    title: '사용자 중심의 UI/UX 개선',
    sub_1: {
      problem: '이슈',
      problem_list: [
        '비디오 업로드 진행상황을 인지할 수 있는 Progress-Bar와 Loading-Indicator를 기획자에게 제안 및 개발',
      ],
      solution: '개선 및 성과',
      solution_list: ['사용자 친화적인 UI/UX 제공'],
    },
    sub_2: {
      problem: '이슈',
      problem_list: ['화면 하단에 CS문의 리스트가 무한으로 쌓이는 현상'],
      solution: '개선 및 성과',
      solution_list: ['Pagination을 구현하여 효율적인 UI 제공'],
    },
  },
];
