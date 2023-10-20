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
              className='font-bold text-2xl text-point dark:text-darkPoint cursor-pointer underline decoration-point dark:decoration-darkPoint hover:no-underline'
              target='_blank'
              rel='noopener noreferrer'
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
            <h3 className='flex items-center font-bold text-lg mb-1'>
              {sub_1.sub_title}
              {sub_1.sub_href && title !== '구조개선 및 리뉴얼' && (
                <Link
                  className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                  href={sub_1.sub_href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  [상세보기]
                </Link>
              )}
            </h3>
            <div className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
              <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {sub_1.problem}
              {title === '구조개선 및 리뉴얼' && (
                <div className='ml-[-0.5rem]'>
                  {sub_1.sub_href && (
                    <Link
                      className='font-bold text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                      href={sub_1.sub_href}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      [상세보기]
                    </Link>
                  )}
                </div>
              )}
            </div>
            {sub_1.problem_list.map((problem, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line '
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
                className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                {solution}
              </li>
            ))}
          </div>

          <div className='mt-1 mb-4'>
            <h3 className='flex items-center font-bold text-lg mb-1'>
              {sub_2.sub_title}
              {sub_2.sub_href && (
                <Link
                  className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                  href={sub_2.sub_href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  [상세보기]
                </Link>
              )}
            </h3>
            <li className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
              <circle className='w-1 h-1 text-point dark:text-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
              {sub_2.problem}
            </li>
            {sub_2.problem_list.map((problem, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
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
                className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                {solution}
              </li>
            ))}
          </div>

          {sub_3 && (
            <div className='mt-1 mb-4'>
              <h3 className='flex items-center font-bold text-lg mb-1'>
                {sub_3.sub_title}
                {sub_3.sub_href && (
                  <Link
                    className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                    href={sub_3.sub_href}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    [상세보기]
                  </Link>
                )}
              </h3>
              <li className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                {sub_3.problem}
              </li>
              {sub_3.problem_list.map((problem, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
                >
                  <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                  {problem}
                </li>
              ))}
              <div className='font-bold relative flex items-start gap-2 mb-1 pl-3'>
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                {sub_3.solution}
              </div>
              {sub_3.solution_list.map((solution, idx) => (
                <li
                  key={idx}
                  className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
                >
                  <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
                  {solution}
                </li>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
