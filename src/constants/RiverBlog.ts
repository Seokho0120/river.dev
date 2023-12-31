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
    description: 'Description.',
    description1: '개인 블로그 및 포트폴리오 개발',
  },
];

export const RiverBlog_WORKS = [
  {
    title: '중복된 데이터 요청 개선',
    href: 'https://river-dev.vercel.app/posts/create-blog-4#%EC%A4%91%EB%B3%B5%EB%90%9C-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9A%94%EC%B2%AD-%EA%B0%9C%EC%84%A0',
    contents: [
      'cache함수를 사용해 동일한 인자로 호출되는 경우 캐시된 값으로 중복 처리',
    ],
  },
  {
    title: '빌드 타임 단축',
    href: 'https://river-dev.vercel.app/posts/create-blog-4#%EB%B9%8C%EB%93%9C-%ED%83%80%EC%9E%84-%EB%8B%A8%EC%B6%95',
    contents: [
      'generateStaticParams를 활용해 게시물을 미리 static하게 만들어 빌드 타임 단축',
    ],
  },
  {
    title: 'SEO 최적화',
    href: 'https://river-dev.vercel.app/posts/create-blog-3#nextjs%EC%9D%98-seo%EC%B5%9C%EC%A0%81%ED%99%94',
    contents: [
      `정적 페이지는 metadata객체를 활용해 Metadata를 생성하고, 
      동적 라우팅 페이지는 generateMetadata 함수를 활용해 동적으로 Metadata를 생성`,
      'Metadata Files API를 활용해 sitemap.xml 파일과 robots.txt를 추가하여 검색 엔진 최적화',
      'Vercel Analytics, Google Analytics를 연동해 다채로운 통계데이터 확인',
      '검색 시 노출도를 상승 시키기 위해 Google Search Console에 사이트를 등록',
    ],
  },
  {
    title: '포스팅 구현 및 관리',
    href: 'https://river-dev.vercel.app/posts/create-blog-2#contentlayer%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%ED%8F%AC%EC%8A%A4%ED%8C%85-%EA%B4%80%EB%A6%AC',
    contents: [
      '데이터베이스 혹은 Headless CMS가 아닌 로컬 환경에서 mdx 파일 관리',
      'contentlayer를 활용해 mdx 파일의 type-safe한 JSON 데이터 형태로 변환 및 관리',
    ],
  },
  {
    title: '다크모드 구현',
    href: 'https://river-dev.vercel.app/posts/create-blog-3#%EB%8B%A4%ED%81%AC%EB%AA%A8%EB%93%9C',
    contents: ['next-themes와 tawilwind 조합으로 다크모드 개발'],
  },
  {
    title: '캐러셀 구현',
    href: 'https://river-dev.vercel.app/posts/create-blog-3#%EC%BA%90%EB%9F%AC%EC%85%80',
    contents: ['react-multi-carousel을 이용해 캐러셀 개발'],
  },
  {
    title: '배포',
    href: '',
    contents: ['Vercel을 이용해 CI/CD 구축 및 배포'],
  },
];
