export const PEACHBLOOM_INFO = [
  {
    title: 'Peach-Bloom',
    date: '2023.11.01 - 2023.11.28',
    per: '개인 프로젝트',
    home: '바로가기',
    href: 'https://peach-bloom.vercel.app/',
    skills: 'Skills.',
    skill_list:
      'Next.js, TypeScript, NextAuth, Tailwind CSS, React-Query, Axios, Firestore, Cloudinary, Vercel',
    github: 'Github',
    github_href: 'https://github.com/Seokho0120/peach-bloom',
    blog: '블로그',
    blog_href: 'https://river-dev.vercel.app/posts/peach-bloom',
    description: 'Description.',
    description1:
      'CRUD를 개발하고 성능 최적화를 구현하며, 현업에서 경험하지 못했던 기술에 익숙해지기 위해 프로젝트 진행.',
  },
];

export const PEACHBLOOM_WORKS = [
  {
    what: 'What I did.',
    title: '성능 최적화',
    sub_1: {
      sub_href:
        'https://river-dev.vercel.app/posts/peach-bloom-4#placeholder-%EC%A0%9C%EA%B3%B5',
      sub_list: [
        'Lighthouse의 Performance 62점 → 97점 / 성능 57% 향상',
        'LCP 2.7s → 1.3s / CLS 0.328 → 0 / Speed Index 1.5s → 0.7s 개선',
        'bundle-analyzer를 사용해 번들 사이즈 측정 후 시간 투자대비 효율이 좋은 순서로 리팩토링 진행',
        'Next.js의 Dynamic import를 사용해 코드 분할을 적용하여 번들 파일 사이즈 감소 및 초기 로딩 속도 향상',
        'Tree Shaking을 적용해 사용하지 않는 코드 제거 및 번들 사이즈 최소화',
        'Next/Image의 srcSet 재설정 및 priority 사용, 로컬 이미지에 placeholder 적용하여 이미지 최적화',
        'Cloudinary의 리사이징 및 포맷 최적화 기능으로 이미지 평균 사이즈 80% 감소 (캐러셀 이미지 43KB → 7KB)',
        'Next/Font를 활용하고 swap 설정으로 폰트 최적화',
      ],
    },
  },
  {
    title: '주요 기능 및 개선',
    sub_1: {
      sub_href: 'https://river-dev.vercel.app/posts/peach-bloom-2',
      sub_list: [
        'Debounce 커스텀훅을 구현하여 키워드를 검색 시 0.3초 후 API 호출 및 서버 과부화 방지',
        'React-Query를 사용하여 Infinite Scroll 및 스크롤 복원 기능을 구현하여 사용성 개선',
        'NextAuth의 Module Augmentation을 활용해, Session 타입을 커스터마이징하여 닉네임 및 관리자 권한 부여',
        'React Portal을 활용해 Modal 구현하여 부모 컴포넌트의 불필요한 렌더링을 최소화',
        '제품 상세페이지를 ISR로 구현하여, 주기적인 데이터 업데이트',
        '정적, 동적 Metadata 생성 및 sitemap과 robots을 추가하여 검색 엔진 최적화',
        '다양한 디바이스를 고려한 반응형 디자인 적용',
      ],
    },
  },
];
