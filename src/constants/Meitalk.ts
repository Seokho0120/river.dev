export const MEITALK_INFO = [
  {
    title: 'Meitalk',
    date: '2022.07 - 2023.07',
    href: 'https://meitalktv.com/',
    skills: 'Skills',
    skill_list:
      'React, React Native, TypeScript, Styled-component, Redux, Redux-Toolkit',
    video: '시연영상',
    video_href:
      'https://auspicious-move-42f.notion.site/Meitalk-c9a6a291c9c442bc9702d728ef985419?pvs=4',
    description: 'MeiTalk의 메인 기능 중 하나인 비디오 업로드 코어 기능 개발.',
    description1:
      '초기에 1GB 이하 비디오 업로드 부터, 기획 변경 후 5GB 이상 비디오 업로드까지 구현.',
  },
];

export const MEITALK_WORKSS = [
  {
    title: '비디오 업로드 기능 구현(Web)',
    sub_1: {
      sub_title: '1GB 이하 비디오 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(web)-1',
      problem: '이슈',
      problem_list: [
        '500mb 이상 업로드 도중 멈춤 및 속도 저하 발생',
        '700mb 비디오 → 4분 이상 소요',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'base64 형식이 아닌, URL.createObjectURL 메서드를 사용해 blob객체의 url 사용',
        '메모리 누수 방지: revokeObjectURL 메서드를 활용해 업로드 후 메모리 해제',
        '업로드 속도 향상: 기존 700mb 비디오 기준 4분 이상 소요 → 1분 이하로 개선',
      ],
    },
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
        '500mb 이상 업로드 도중 멈춤 및 속도 저하 발생',
        '700mb 비디오 → 4분 이상 소요',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'base64 형식이 아닌, URL.createObjectURL 메서드를 사용해 blob객체의 url 사용',
        '메모리 누수 방지: revokeObjectURL 메서드를 활용해 업로드 후 메모리 해제',
        '업로드 속도 향상: 기존 700mb 비디오 기준 4분 이상 소요 → 1분 이하로 개선',
      ],
    },
    sub_2: {
      sub_title: '1GB 이상 비디오 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(web)-2',
      problem: '이슈',
      problem_list: [
        '업로드 제한 용량 1gb ~ 5gb 이상으로 기획안 변경',
        '일정 용량 (1.5gb) 이상 업로드 시 간헐적 네트워크 오류로 요청 끊김 및 화면 멈춤',
        '대용량 파일을 한번에 서버로 업로드하여 OOM(Out of Memory Exception) 발생',
      ],
      solution: '개선 및 성과',
      solution_list: [
        '효율적인 파일 업로드를 위해 Tus-protocol 적용 및 백엔드팀 제안',
        'chunk 단위로 분할 업로드하여 OOM(Out of Memory Exception) 이슈 방지',
        '업로드 시간 70% 이상 단축',
        '기존 1gb 비디오 기준 2분 이상 소요 → 40초 이하로 개선',
        '5gb 이상 비디오 업로드 기능 개발 → 2분 이하 소요',
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
        '클라이언트에서 메모리 이슈가 발생하며, 100mb 이상 비디오 업로드 실패',
        'tus-js-client가 문제라 판단해, react-native-tus-client 등 다른 라이브러리로 재시도 했지만 실패',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'Tus-protocol 공식 문서를 분석해, tus-js-client와 동일한 기능을 제공하는 Client를 직접 개발하여 업로드 기능 구현',
        '정확한 offset과 chunk 값을 계산하여, 업로드 요청이 끊겨도 중단된 위치 추적 및 재업로드 기능 구현',
      ],
    },
    sub_2: {
      sub_title: 'IOS 고용량 파일 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(app)-4',
      problem: '이슈',
      problem_list: [
        '일정 용량 (2.5gb) 이상 업로드 시 offset 값을 읽지 못하고 앱 튕김 현상 발생',
      ],
      solution: '개선 및 성과',
      solution_list: [
        `patch-package 라이브러리를 활용하여 Objective-C 언어로 구현된 RNFS 라이브러리의 기존 int타입을 unsigned long타입으로 개선`,
        '오버플로우(Overflow) 이슈 해결',
        'IOS 환경에서 고용량 비디오 업로드 구현',
      ],
    },
    sub_3: {
      sub_title: 'Picker 개선',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(app)-5',
      problem: '이슈',
      problem_list: [
        'IOS에서 대용량 파일을 읽지 못하고 오래 걸리는 이슈',
        '4gb 비디오 → 20분 이상 소요',
      ],
      solution: '개선 및 성과',
      solution_list: [
        'IOS와 안드로이드 각각 다른 picker로 분기 처리하여 파일 읽는 시간 90% 이상 단축',
        '기존 4gb 비디오 기준 20분 → 3초 이하로 개선',
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
        '각 화면의 유형을 명시적으로 설정한 컴포넌트를 구현해 관련 section 유지보수 시간 50% 이상 단축',
      ],
    },
    sub_2: {
      problem: '이슈',
      problem_list: ['Pros Drilling 및 레거시 코드로 구현된 FAQ 페이지 리뉴얼'],
      solution: '개선 및 성과',
      solution_list: ['코드 리팩토링 및 Redux로 상태 관리하여 개선'],
    },
  },
  {
    title: '사용자 중심의 UI/UX 개선',
    sub_1: {
      problem: '이슈',
      problem_list: ['비디오 업로드 진행 상황을 인지할 수 없는 기획'],
      solution: '개선 및 성과',
      solution_list: [
        'Progress-Bar, Loading-Indicator 기획자에게 제안 및 개발하여 사용자 친화적인 UI/UX 제공',
      ],
    },
    sub_2: {
      problem: '이슈',
      problem_list: ['화면 하단에 CS문의 리스트가 무한으로 쌓이는 현상'],
      solution: '개선 및 성과',
      solution_list: ['Pagination을 개발하여 UI 개선'],
    },
  },
];
