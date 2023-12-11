export const MEITALK_INFO = [
  {
    title: 'Meitalk',
    date: '2022.07 - 2023.07',
    href: 'https://meitalktv.com/',
    skills: 'Skills.',
    skill_list:
      'React, React Native, TypeScript, Styled-component, Redux, Redux-Toolkit',
    video: '시연영상',
    video_href:
      'https://auspicious-move-42f.notion.site/Meitalk-c9a6a291c9c442bc9702d728ef985419?pvs=4',
    description: 'Description.',
    description1: 'MeiTalk의 메인 기능 중 하나인 비디오 업로드 코어 기능 개발.',
    description2:
      '초기에 1GB 이하 비디오 업로드 부터, 기획 변경 후 5GB 이상 비디오 업로드까지 구현.',
    what: 'What I did.',
  },
];

export const MEITALK_WORKS = [
  {
    what: 'What I did.',
    title: '비디오 업로드 기능 구현(Web)',
    sub_1: {
      sub_title: '1GB 이하 비디오 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(web)-1',
      sub_list: [
        'Blob객체의 URL을 사용해 업로드 속도 향상, 메모리 누수 방지',
        '700mb 파일 기준 4분  → 1분으로 단축',
      ],
    },
    sub_2: {
      sub_title: '1GB 이상 비디오 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(web)-2',
      sub_list: [
        '일정 용량(1.5GB) 비디오 업로드 시 네트워크 오류, OOM 발생',
        'Tus Protocol을 도입하여 Chunk 단위 분할 업로드 구현, OOM 이슈 해결',
        '업로드 시간 70% 이상 단축',
        '1GB 파일 기준 2분  → 40초로 단축',
        '5GB 이상 비디오 업로드 기능 구현 → 2분 이하 소요',
      ],
    },
  },
  {
    title: '비디오 업로드 (App)',
    sub_1: {
      sub_title: 'Client 구현',
      sub_href:
        'https://river-dev.vercel.app/posts/video-upload(app)-3#1-uploadapi-%ED%95%A8%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0',
      sub_list: [
        'tus-js-client 라이브러리와 동일한 기능을 제공하는 Client 직접 개발하여 업로드 기능 구현',
        'Offset과 Chunk 값을 계산해 업로드 요청이 끊겨도 중단된 위치 추적 및 재업로드 기능 개발',
      ],
    },
    sub_2: {
      sub_title: 'IOS 고용량 업로드',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(app)-4',
      sub_list: [
        'patch-package를 활용해 Objective-C 언어로 개발된 RNFS 라이브러리 타입 개선',
        '오버플로우(Overflow) 이슈 해결',
        'IOS 환경에서 고용량 비디오 업로드 구현',
      ],
    },
    sub_3: {
      sub_title: 'Picker 개선',
      sub_href: 'https://river-dev.vercel.app/posts/video-upload(app)-5',
      sub_list: [
        'IOS와 안드로이드 각각 다른 Picker로 분기 처리하여 파일 읽는 시간 90% 이상 단축',
        '4GB 파일 기준 20분 → 3초 이하로 단축',
        ,
      ],
    },
  },
  {
    title: '구조개선 및 리뉴얼',
    sub_1: {
      sub_href: 'https://river-dev.vercel.app/posts/develop-components',
      sub_list: [
        '각 화면의 유형을 명시적으로 설정한 컴포넌트 구현 → 유지보수 시간 50% 이상 단축',
        'Redux로 상태관리 → Props Drilling 및 레거시 코드로 구현된 페이지 리뉴얼',
      ],
    },
  },
  {
    title: '사용자 중심의 UI/UX 제공',
    sub_1: {
      sub_list: [
        'Progress-Bar, Loading-Indicator 기획자에게 제안 및 개발 → 업로드 상황을 인지할 수 있는 UI/UX 제공',
        'Pagination 기획자에게 제안 및 개발 → 화면 하단에 CS문의 리스트가 무한으로 쌓이는 현상 개선',
      ],
    },
  },
];
