import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useState } from 'react';

interface CustomArrowsProps {
  onClick: () => void;
  type: string;
}

export function CustomArrow({ type, onClick }: CustomArrowsProps) {
  return (
    <button
      onClick={onClick}
      className={`absolute ${
        type === 'left' ? 'left-0' : 'right-0'
      } top-2.5/3 transform -translate-y-1/2 transition-opacity duration-200 opacity-0 hover:opacity-90 text-point`}
    >
      {type === 'left' ? (
        <MdKeyboardArrowLeft className='w-10 h-10' />
      ) : (
        <MdKeyboardArrowRight className='w-10 h-10' />
      )}
    </button>
  );
}
