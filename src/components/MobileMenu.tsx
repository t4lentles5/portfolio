import { useState } from 'react';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='cursor-pointer'>
        {isOpen ? (
          <span
            className='icon-[tabler--x] flex md:hidden size-6'
            role='img'
            aria-hidden='true'
          />
        ) : (
          <span
            className='icon-[stash--burger-classic] flex md:hidden size-6'
            role='img'
            aria-hidden='true'
          ></span>
        )}
      </button>

      {isOpen && (
        <div className='w-[300px] items-center flex flex-col bg-white/30  rounded-lg absolute bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-border -right-5 top-[30px] *:p-2 *:w-full *:text-center'>
          <a href='#skills' onClick={() => setIsOpen(false)}>
            🛠️ Skills
          </a>
          <a href='#projects' onClick={() => setIsOpen(false)}>
            🚀 Projects
          </a>
        </div>
      )}
    </>
  );
};
