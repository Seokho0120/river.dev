import Link from 'next/link';
import { RiverBlog_INFO, RiverBlog_WORKS } from '@/src/constants/RiverBlog';

export default function RiverBlog() {
  return (
    <section className='mb-10'>
      {RiverBlog_INFO.map(
        ({
          title,
          date,
          href,
          skills,
          skill_list,
          status,
          github,
          github_href,
        }) => (
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
                {date} |{' '}
                <Link
                  href={github_href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {github}
                </Link>
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
