import Link from 'next/link';
import { FNF_INFO, FNF_WORKS } from '@/src/constants/FnF';

export default function FnF() {
  return (
    <section className='mb-10'>
      {FNF_INFO.map(
        ({
          title,
          date,
          href,
          skills,
          skill_list,
          video,
          video_href,
          github,
          github_href,
          review,
          review_href,
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
                  aria-label={github_href}
                >
                  {github}
                </Link>{' '}
                |{' '}
                <Link
                  href={video_href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={video_href}
                >
                  {video}
                </Link>{' '}
                |{' '}
                <Link
                  href={review_href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={review_href}
                >
                  {review}
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

      {FNF_WORKS.map(({ title, contents, title_href, sub_href }, idx) => (
        <div key={idx} className='mb-2'>
          <h2 className='flex items-center font-bold text-xl'>
            {title}
            {title_href && (
              <Link
                className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                href={title_href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={title_href}
              >
                [상세보기]
              </Link>
            )}
          </h2>
          {contents.map((content, idx) => (
            <li
              key={idx}
              className='font-medium relative flex items-center mb-1 pl-7 whitespace-pre-line'
            >
              <div className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-4 top-[0.6rem] inline-block' />
              {content}
              {sub_href && content === '재사용 컴포넌트 관리의 중요성 경험' && (
                <Link
                  className='ml-1 font-bold text-sm text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                  href={sub_href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={sub_href}
                >
                  [상세보기]
                </Link>
              )}
            </li>
          ))}
        </div>
      ))}
    </section>
  );
}
