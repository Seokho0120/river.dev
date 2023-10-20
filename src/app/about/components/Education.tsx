import Link from 'next/link';
import { EDUCATION_MENU } from '@/src/constants/EducationData';

export default function Education() {
  return (
    <section className='mb-10'>
      <h1 className='text-4xl font-bold mb-4 underline underline-offset-2 decoration-wavy decoration-point dark:decoration-orange-400 decoration-2'>
        Education.
      </h1>

      {EDUCATION_MENU.map(({ title, job, date, lists, href }, idx) => (
        <div className='flex mb-6' key={idx}>
          <div className='w-1/3'>
            <p className='text-xl font-bold mb-1 cursor-pointer hover:text-point dark:hover:text-darkPoint'>
              <Link href={href}>{title}</Link>
            </p>
            <p className='text-sm italic text-neutral-600 dark:text-neutral-400'>
              {job}
            </p>
            <p className='text-sm italic text-neutral-600 dark:text-neutral-400'>
              {date}
            </p>
          </div>
          <ul className='w-2/3'>
            {lists.map((list, idx) => (
              <li
                key={idx}
                className='relative flex items-start gap-2 mb-1 pl-3 whitespace-pre-line'
              >
                <circle className='w-1 h-1 bg-point dark:bg-darkPoint rounded-full absolute left-0 top-[0.6rem] inline-block' />
                {list}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
