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
          description,
          description1,
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

            <div className='gap-2 my-3'>
              <h2 className='font-bold text-xl'>{description}</h2>
              <div className='relative pl-3'>
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 dark:bg-darkPoint rounded-full' />
                <p>{description1}</p>
              </div>
            </div>

            <div>
              <p className='text-xl font-bold'>{skills}</p>
              <div className='relative pl-3'>
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 dark:bg-darkPoint rounded-full' />
                {skill_list}
              </div>
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
              className='font-medium relative flex items-start gap-2 mb-1 pl-3 whitespace-pre-line'
            >
              <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 dark:bg-darkPoint rounded-full' />
              {content}
            </li>
          ))}
        </div>
      ))}
    </section>
  );
}
