import { RiverBlog_INFO, RiverBlog_WORKS } from '@/src/constants/RiverBlog';
import Link from 'next/link';

export default function RiverBlog() {
  return (
    <section className='mb-10'>
      {RiverBlog_INFO.map(
        ({ title, date, href, skills, skill_list, status, github }) => (
          <div key={href} className='flex flex-col my-4'>
            <div className='mb-2'>
              <Link
                href={href}
                className='font-bold text-2xl text-point cursor-pointer underline decoration-point hover:no-underline'
              >
                {title}
              </Link>
              <p className='mt-2 italic text-neutral-600 dark:text-neutral-400'>
                {date} | {status} | {github}
              </p>
            </div>

            <div>
              <p className='text-xl font-bold'>{skills}</p>
              <p>{skill_list}</p>
            </div>
          </div>
        )
      )}

      {RiverBlog_WORKS.map(({ title, contents }, idx) => (
        <div key={idx}>
          <h2 className='font-bold text-xl'>{title}</h2>
          {contents.map((content, idx) => (
            <li
              key={idx}
              className='relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
            >
              <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
              {content}
            </li>
          ))}
        </div>
      ))}
    </section>
  );
}
