# River.blog ✨

프론트엔드 개발자 이석호의 기술 블로그 입니다.

<p align='center'>
  <img src='/blog/img/blog-main.png' width={800} alt='blog-main' />
</p>

## Link

> ✨ **Blog** https://river-dev.vercel.app/
> ✨ **Resume** https://river-dev.vercel.app/about

## SKills

Next.js, TypeScript, TailwindCSS, Contentlayer, Vercel, Vercel Analytics, Google Analytics

## What did I do

> ✨ 자세한 구현과정은 블로그 포스팅을 참고해주세요

- [Next.js 블로그 만들기 1탄 (기술 선택의 이유)](https://river-dev.vercel.app/posts/create-blog-1)
- [Next.js 블로그 만들기 2탄 (폴더 구조, 포스팅 관리)](https://river-dev.vercel.app/posts/create-blog-2)
- [Next.js 블로그 만들기 3탄 (SEO최적화, 다크모드, 캐러셀)](https://river-dev.vercel.app/posts/create-blog-3)
- [Next.js 블로그 만들기 4탄 (이슈 개선하기)](https://river-dev.vercel.app/posts/create-blog-4)

#### 중복된 데이터 요청 개선

- cache함수를 사용해 동일한 인자로 호출되는 경우 캐시된 값으로 중복 처리

#### 빌드 타임 단축

- generateStaticParams를 활용해 게시물을 미리 static하게 만들어 빌드 타임 단축

#### SEO 최적화

- 정적 페이지는 metadata객체를 활용해 metadata를 생성하고, 동적 라우팅 페이지는 generateMetadata를 활용해 동적으로 metadata를 생성
- Metadata Files API를 활용해 sitemap.xml 파일과 robots.txt를 추가하여 검색 엔진 최적화
- Vercel Analytics, Google Analytics를 연동해 다채로운 통계데이터 확인
- 검색 시 노출도를 상승 시키기 위해 Google Search Console에 사이트를 등록

#### 포스팅 구현 및 관리

- 데이터베이스 혹은 Headless CMS가 아닌 로컬 환경에서 mdx 파일 관리
- contentlayer를 활용해 mdx 파일의 type-safe한 JSON 데이터 형태로 변환 및 관리

#### 다크모드 구현

- Next.js 13환경에서 최고의 효율을 보여주는 next-themes와 tawilwind 조합으로 다크모드 개발

#### 캐러셀 구현

- react-multi-carousel을 이용해 캐러셀 개발

#### 배포

- Vercel을 이용해 CI/CD 구축 및 배포
