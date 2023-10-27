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
                aria-label={title}
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
                  aria-label={github}
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

      {RiverBlog_WORKS.map(({ title, contents, href }, idx) => (
        <div key={idx} className='mb-2'>
          <h2 className='flex items-center font-bold text-xl'>
            {title}
            {href && (
              <Link
                className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={href}
              >
                [상세보기]
              </Link>
            )}
          </h2>

          {contents.map((content, idx) => (
            <li
              key={idx}
              className='font-medium relative flex items-start gap-2 mb-1 pl-7 whitespace-pre-line'
            >
              <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
              {content}
            </li>
          ))}
        </div>
      ))}
    </section>
  );
}
