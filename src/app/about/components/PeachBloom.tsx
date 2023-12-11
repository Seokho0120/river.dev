import Link from 'next/link';
import { PEACHBLOOM_INFO, PEACHBLOOM_WORKS } from '@/src/constants/PeachBloom';

export default function PeachBloom() {
  return (
    <section className='mb-10'>
      {PEACHBLOOM_INFO.map(
        ({
          title,
          date,
          href,
          skills,
          skill_list,
          github,
          github_href,
          blog,
          blog_href,
          description,
          description1,
          per,
          home,
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
                {date} | {per} |{' '}
                <Link
                  href={github_href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={github_href}
                >
                  {github}
                </Link>{' '}
                |{' '}
                <Link
                  href={blog_href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={blog_href}
                >
                  {blog}
                </Link>{' '}
                |{' '}
                <Link
                  href={href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={href}
                >
                  {home}
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

      {PEACHBLOOM_WORKS.map(({ what, title, sub_1 }) => (
        <div key={title}>
          <p className='text-xl font-bold mb-1'>{what}</p>

          <div className='flex items-center'>
            <h2 className='font-bold text-xl'>{title}</h2>
            {sub_1.sub_href && (
              <Link
                className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                href={sub_1.sub_href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={sub_1.sub_href}
              >
                [상세보기]
              </Link>
            )}
          </div>

          <div className='mt-1 mb-4'>
            <h3 className='relative flex items-center font-bold text-lg mb-1'></h3>
            {sub_1.sub_list.map((list, idx) => (
              <li
                key={idx}
                className='pl-3 font-medium relative flex items-start gap-2 mb-1 whitespace-pre-line'
              >
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 dark:bg-darkPoint rounded-full' />
                {list}
              </li>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
