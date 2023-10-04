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
            className={`cursor-pointer ${
              selected === category ? 'text-point' : 'text-gray-500'
            } hover:text-point`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
