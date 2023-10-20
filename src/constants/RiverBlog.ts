export const RiverBlog_INFO = [
  {
    title: 'River-dev Blog',
    date: '2023.10',
    href: 'https://river-dev.vercel.app/',
    skills: 'Skills',
    skill_list:
      'Next.js, TypeScript, Tailwind CSS, Contentlayer, Vercel, Vercel Analytics, Google Analytics ',
    github: 'Github',
    github_href: 'https://github.com/Seokho0120/river.dev',
    status: '개인프로젝트',
  },
];

export const RiverBlog_WORKS = [
  {
    title: '중복된 데이터 요청 개선',
    contents: [
      'cache함수를 사용해 동일한 인자로 호출되는 경우 캐시된 값으로 중복 처리',
    ],
  },
  {
    title: '빌드 타임 단축',
    contents: [
      'generateStaticParams를 활용해 게시물을 미리 static하게 만들어 빌드 타임 단축',
    ],
  },
  {
    title: 'SEO 최적화',
    contents: [
      `정적 페이지는 metadata객체를 활용해 metadata를 생성하고, 
      동적 라우팅 페이지는 generateMetadata를 활용해 동적으로 metadata를 생성`,
      'Metadata Files API를 활용해 sitemap.xml 파일과 robots.txt를 추가하여 검색 엔진 최적화',
      'Vercel Analytics, Google Analytics를 연동해 다채로운 통계데이터 확인',
      '검색 시 노출도를 상승 시키기 위해 Google Search Console에 사이트를 등록',
    ],
  },
  {
    title: '포스팅 구현 및 관리',
    contents: [
      '데이터베이스 혹은 Headless CMS가 아닌 로컬 환경에서 mdx 파일 관리',
      'contentlayer를 활용해 mdx 파일의 type-safe한 JSON 데이터 형태로 변환 및 관리',
    ],
  },
  {
    title: '배포',
    contents: ['Vercel을 이용해 CI/CD 구축 및 배포'],
  },
  {
    title: '다크모드 구현',
    contents: [
      'Next.js 13환경에서 최고의 효율을 보여주는 next-themes와 tawilwind 조합으로 다크모드 개발',
    ],
  },
  {
    title: '캐러셀 구현',
    contents: ['react-multi-carousel을 이용해 캐러셀 개발'],
  },
];
