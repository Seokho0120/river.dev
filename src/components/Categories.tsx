type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <ul className='flex gap-6 mb-10'>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`cursor-pointer  hover:text-point dark:hover:text-orange-400 ${
              selected === category
                ? 'text-point dark:text-orange-400'
                : 'text-gray-500'
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
