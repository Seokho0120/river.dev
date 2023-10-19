const test = [
  {
    title: '알라딘글로벌알앤디센터',
    job: '프론트엔드 개발자',
    date: '2022.07 - 2023.07',
    lists: [
      '동영상 공유 플랫폼 MeiTalk 베타 버전 개발 참여',
      'MeiTalk 웹 / 앱 비디오 업로드 및 재업로드 기능 개발',
      '컴포넌트 구조개선 및 페이지 리뉴얼',
      '신규 화면 및 기능 개발',
      '고객문의 / 공지사항 / FAQ / 채널 관리(구독 및 설정) 비디오 관리(업로드, 상태 관리, 목록, 히스토리)+@',
      '사용자 중심의 UI/UX 개선',
    ],
  },
  {
    title: '에프앤에프(F&F)',
    job: '프론트엔드 개발자 인턴',
    date: '2022.01 - 2022.02',
    lists: [
      '순수 자바스크립트로 개발된 데이터 대시보드를 React로 전환하는 프로젝트 참여',
      '경쟁사 마켓 검색량 데이터 시각화',
      '재사용 컴포넌트 개발',
      'UI/UX 디자인 및 기획',
    ],
  },
];

export default function Careers() {
  return (
    <section className='mb-10'>
      <h1 className='text-3xl font-bold mb-4 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Careers.
      </h1>

      {test.map(({ title, job, date, lists }, idx) => (
        <div className='flex mb-4' key={idx}>
          <div className='w-1/3'>
            <p>{title}</p>
            <p>{job}</p>
            <p>{date}</p>
          </div>
          <ul className='w-2/3'>
            {lists.map((tt, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-3'
              >
                <circle className='w-1 h-1 bg-point rounded-full absolute left-0 top-2 inline-block' />
                {tt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
