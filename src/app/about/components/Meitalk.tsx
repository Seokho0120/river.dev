import Link from 'next/link';
import { MEITALK_INFO, MEITALK_WORKS } from '@/src/constants/Meitalk';

export default function Meitalk() {
  return (
    <section className='mb-10'>
      <h1 className='text-4xl font-bold mb-6 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Projects.
      </h1>

      {MEITALK_INFO.map(
        ({
          title,
          date,
          href,
          skills,
          skill_list,
          video,
          video_href,
          description,
          description1,
          description2,
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
                  href={video_href}
                  className='text-point dark:text-darkPoint underline underline-offset-2 decoration-point dark:decoration-darkPoint hover:no-underline'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={video_href}
                >
                  {video}
                </Link>
              </p>
            </div>

            <div className='gap-2 my-3'>
              <h2 className='font-bold text-xl'>{description}</h2>
              <div className='relative pl-3'>
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 rounded-full' />
                <p>{description1}</p>
                <span className='absolute left-0 top-9 w-1 h-1 bg-blue-500 rounded-full' />
                <p>{description2}</p>
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

      {MEITALK_WORKS.map(({ what, title, sub_1, sub_2, sub_3 }) => (
        <div key={title}>
          <p className='text-xl font-bold mb-1'>{what}</p>
          <h2 className='font-bold text-xl'>{title}</h2>

          <div className='mt-1 mb-4'>
            {/* ------------------------------------------------------- */}
            <h3 className='relative flex items-center font-bold text-lg mb-1'>
              {sub_1.sub_title}
              {sub_1.sub_href && title !== '구조개선 및 리뉴얼' && (
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

              {title === '구조개선 및 리뉴얼' && (
                <div className='ml-[-0.5rem] absolute bottom-1 left-[158px]'>
                  {sub_1.sub_href && (
                    <Link
                      className='font-bold text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                      href={sub_1.sub_href}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={sub_1.sub_href}
                    >
                      [상세보기]
                    </Link>
                  )}
                </div>
              )}
            </h3>
            {sub_1.sub_list.map((list, idx) => (
              <li
                key={idx}
                className='pl-3 font-medium relative flex items-start gap-2 mb-1 whitespace-pre-line'
              >
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 rounded-full' />
                {list}
              </li>
            ))}

            {/* ------------------------------------------------------- */}
            <h3 className='flex items-center font-bold text-lg mb-1'>
              {sub_2?.sub_title}
              {sub_2?.sub_href && (
                <Link
                  className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                  href={sub_2?.sub_href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={sub_2?.sub_href}
                >
                  [상세보기]
                </Link>
              )}
            </h3>
            {sub_2?.sub_list.map((list, idx) => (
              <li
                key={idx}
                className='pl-3 font-medium relative flex items-start gap-2 mb-1 whitespace-pre-line'
              >
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 rounded-full' />
                {list}
              </li>
            ))}

            {/* ------------------------------------------------------- */}
            <h3 className='flex items-center font-bold text-lg mb-1'>
              {sub_3?.sub_title}
              {sub_3?.sub_href && (
                <Link
                  className='text-sm ml-1 text-point dark:text-darkPoint underline decoration-point dark:decoration-darkPoint hover:no-underline'
                  href={sub_3?.sub_href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={sub_3?.sub_href}
                >
                  [상세보기]
                </Link>
              )}
            </h3>
            {sub_3?.sub_list.map((list, idx) => (
              <li
                key={idx}
                className='pl-3 font-medium relative flex items-start gap-2 mb-1 whitespace-pre-line'
              >
                <span className='absolute left-0 top-2.5 w-1 h-1 bg-blue-500 rounded-full' />
                {list}
              </li>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
