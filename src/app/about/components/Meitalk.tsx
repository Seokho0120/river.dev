import { MEITALK_INFO, MEITALK_WORKS } from '@/src/constants/Meitalk';
import Link from 'next/link';

export default function Meitalk() {
  return (
    <section className='mb-10'>
      <h1 className='text-4xl font-bold mb-4 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Projects.
      </h1>

      {MEITALK_INFO.map(({ title, date, href, skills, skill_list, video }) => (
        <div key={href} className='flex flex-col my-4'>
          <div className='mb-2'>
            <Link
              href={href}
              className='font-bold text-2xl text-point cursor-pointer underline decoration-point hover:no-underline'
              // className='font-bold text-3xl cursor-pointer underline hover:no-underline decoration-point dark:decoration-darkPoint underline-offset-4'
            >
              {title}
            </Link>
            <p className='mt-2 italic text-neutral-600 dark:text-neutral-400'>
              {date} | {video}
            </p>
          </div>

          <div>
            <p className='text-xl font-bold'>{skills}</p>
            <p>{skill_list}</p>
          </div>
        </div>
      ))}

      {MEITALK_WORKS.map(({ title, sub_1, sub_2, sub_3 }) => (
        <div key={title}>
          <h2 className='font-bold text-xl'>{title}</h2>

          <div className='mt-1 mb-4'>
            <h3 className='font-bold text-lg mb-1'>{sub_1.sub_title}</h3>
            <li className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
              <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {sub_1.problem}
            </li>
            {sub_1.problem_list.map((problem, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-7'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                {problem}
              </li>
            ))}
            <div className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
              <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {sub_1.solution}
            </div>
            {sub_1.solution_list.map((solution, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-7'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                {solution}
              </li>
            ))}
          </div>

          <div className='mt-1 mb-4'>
            <h3 className='font-bold text-lg mb-1'>{sub_2.sub_title}</h3>
            <li className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
              <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {sub_2.problem}
            </li>
            {sub_2.problem_list.map((problem, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-7'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                {problem}
              </li>
            ))}
            <div className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
              <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {sub_2.solution}
            </div>
            {sub_2.solution_list.map((solution, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-7'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                {solution}
              </li>
            ))}
          </div>

          {/* <div className='font-bold text-xl'>{sub_2.sub_title}</div>
          <div>{sub_2.problem}</div>
          {sub_2.problem_list.map((problem, idx) => (
            <li key={idx} className='relative flex items-start gap-2 mb-1 pl-3'>
              <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {problem}
            </li>
          ))}
          <div>{sub_2.solution}</div>
          {sub_2.solution_list.map((solution, idx) => (
            <li key={idx} className='relative flex items-start gap-2 mb-1 pl-3'>
              <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {solution}
            </li>
          ))}

          <div className='font-bold text-xl'>{sub_3?.sub_title}</div>
          <div>{sub_3?.problem}</div>
          {sub_3?.problem_list.map((problem, idx) => (
            <li key={idx} className='relative flex items-start gap-2 mb-1 pl-3'>
              <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {problem}
            </li>
          ))}
          <div>{sub_3?.solution}</div>
          {sub_3?.solution_list.map((solution, idx) => (
            <li key={idx} className='relative flex items-start gap-2 mb-1 pl-3'>
              <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {solution}
            </li>
          ))} */}
        </div>
      ))}
    </section>
  );
}
