import { MEITALK_INFO, MEITALK_WORKS } from '@/src/constants/Meitalk';
import Link from 'next/link';

export default function Meitalk() {
  return (
    <section className='mb-10'>
      <h1 className='text-3xl font-bold mb-4 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Projects.
      </h1>

      {MEITALK_INFO.map(({ title, date, href, skills, skill_list, video }) => (
        <>
          <div key={href} className='font-bold text-2xl'>
            {title}
          </div>
          <div>
            {date} | {video}
          </div>
          <div>{skills}</div>
          <div>{skill_list}</div>
        </>
      ))}

      {MEITALK_WORKS.map(({ title, sub_1, sub_2, sub_3 }) => (
        <>
          <div key={title}>
            <p className='font-bold text-3xl'>{title}</p>
            <div>
              <div className='font-bold text-xl'>{sub_1.sub_title}</div>
              <div>{sub_1.problem}</div>
              {sub_1.problem_list.map((problem, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-3'
                >
                  <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                  {problem}
                </li>
              ))}
              <div>{sub_1.solution}</div>
              {sub_1.solution_list.map((solution, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-3'
                >
                  <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                  {solution}
                </li>
              ))}

              <div className='font-bold text-xl'>{sub_2.sub_title}</div>
              <div>{sub_2.problem}</div>
              {sub_2.problem_list.map((problem, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-3'
                >
                  <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                  {problem}
                </li>
              ))}
              <div>{sub_2.solution}</div>
              {sub_2.solution_list.map((solution, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-3'
                >
                  <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                  {solution}
                </li>
              ))}

              <div className='font-bold text-xl'>{sub_3?.sub_title}</div>
              <div>{sub_3?.problem}</div>
              {sub_3?.problem_list.map((problem, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-3'
                >
                  <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                  {problem}
                </li>
              ))}
              <div>{sub_3?.solution}</div>
              {sub_3?.solution_list.map((solution, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-3'
                >
                  <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                  {solution}
                </li>
              ))}
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
