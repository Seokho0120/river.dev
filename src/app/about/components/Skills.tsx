export default function Skills() {
  return (
    <section className='mb-10'>
      <h1 className='text-4xl font-bold mb-6 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Skills.
      </h1>
      <p className='font-semibold text-base mb-2'>
        Next.JS, React, React Native, TypeScript, JavaScript, Styled-Components,
        TailwindCSS
      </p>

      <ul>
        <li className='font-medium relative flex items-start gap-2 mb-1 pl-3 whitespace-pre-line'>
          <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
          기술이 생겨난 역사와 왜 쓰는지에 대해 깊게 고민하려고 노력합니다.
        </li>
        <li className='font-medium relative flex items-start gap-2 mb-1 pl-3 whitespace-pre-line'>
          <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
          단순히 서적과 강의에 의존하지 않고, 직접 사용하고 부딪히며 새로운
          기술을 학습합니다.
        </li>
      </ul>
    </section>
  );
}
