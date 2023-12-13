const SKILLS = [
  '서적에 의존하지 않고, 직접 사용하고 부딪히는 경험을 통해 학습하는 방식을 선호합니다.',
  '화면과 비지니스 로직을 관심사에 따라 분리하며, 컴포넌트를 작고 재사용 가능한 단위로 쪼개어 개발합니다.',
  '최근 프레임워크의 안정성, 편리함에 매료되어 Next.js를 사용하며, 화면의 목적과 기능에 따라 CSR, SSG, ISR, SSR을 적용합니다. 또한, Next.js가 제공하는 다양한 SEO, 최적화 기능을 적극 활용합니다.',
  'React의 재사용 로직을 분리하기 위해 커스텀 훅을 활용하고, 다양한 최적화 기법을 고려합니다.',
  'TypeScript의 강력한 타입시스템을 활용하여, 코드의 안정성을 높이고 유지보수성에 집중합니다.',
  '주로 Styled-Components를 활용했지만, 최근 번글 크기가 작고 작업속도가 빠른 Tailwind CSS를 선호합니다.',
  'Next.js와 친화적이며 CI/CD를 자동으로 구축하고 활용 방법도 간편한 Vercel을 이용해 배포 합니다.',
  'Firestore, Realtime Database, Authentication 등 Firebase의 다양한 기능을 사용한 경험이 있습니다.',
];

export default function Skills() {
  return (
    <section className='mb-10'>
      <h1 className='text-4xl font-bold mb-6 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Skills.
      </h1>
      <p className='font-semibold text-base mb-2'>
        Next.JS, React, React Native, TypeScript, JavaScript, Styled-Components,
        Tailwind CSS, Figma
      </p>

      <ul className='flex flex-col font-medium items-start gap-2 mb-1 whitespace-pre-line'>
        {SKILLS.map((skill, idx) => (
          <li key={idx} className='relative pl-3'>
            <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 dark:bg-darkPoint rounded-full'></span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
