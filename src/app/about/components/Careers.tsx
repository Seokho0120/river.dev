const test = [
  {
    title: '알라딘글로벌알앤디센터',
    job: '프론트엔드 개발자',
    date: '2022.07 - 2023.07',
    lists: [
      {
        li: '동영상 공유 플랫폼 MeiTalk 베타 버전 개발 참여',
      },
      {
        li: 'MeiTalk 웹 / 앱 비디오 업로드 및 재업로드 기능 개발',
      },
      {
        li: '컴포넌트 구조개선 및 페이지 리뉴얼',
      },
      {
        li: '신규 화면 및 기능 개발',
      },
      {
        li: '고객문의 / 공지사항 / FAQ / 채널 관리(구독 및 설정) 비디오 관리(업로드, 상태 관리, 목록, 히스토리)+@',
      },
      {
        li: '사용자 중심의 UI/UX 개선',
      },
    ],
  },
  {
    title: '에프앤에프(F&F)',
    job: '프론트엔드 개발자 인턴',
    date: '2022.01 - 2022.02',
    lists: [
      {
        li: '순수 자바스크립트로 개발된 데이터 대시보드를 React로 전환하는 프로젝트 참여',
      },
      {
        li: '경쟁사 마켓 검색량 데이터 시각화',
      },
      {
        li: '재사용 컴포넌트 개발',
      },
      {
        li: 'UI/UX 디자인 및 기획',
      },
    ],
  },
];

export default function Careers() {
  return (
    <section>
      {test.map(({ title, job, date, lists }, idx) => (
        <div className='flex gap-10' key={idx}>
          <div>
            <div>{title}</div>
            <div>{job}</div>
            <div>{date}</div>
          </div>
          <div>
            {lists?.map((tt, idx) => (
              <li key={idx}>{tt.li}</li>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
