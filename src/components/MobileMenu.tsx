import { useState, useEffect, useRef } from 'react';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative md:hidden' ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer p-1 rounded-md hover:bg-primary/10 transition-colors duration-300 ease-in-out'
        aria-label='Toggle menu'
      >
        {isOpen ? (
          <span
            className='icon-[tabler--x] flex size-6'
            role='img'
            aria-hidden='true'
          />
        ) : (
          <span
            className='icon-[stash--burger-classic] flex size-6'
            role='img'
            aria-hidden='true'
          />
        )}
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-48 origin-top-right rounded-xl border border-border bg-background/80 p-2 shadow-xl backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isOpen
            ? 'visible scale-100 opacity-100'
            : 'invisible scale-95 opacity-0'
        }`}
      >
        <nav className='flex flex-col gap-1'>
          <a
            href='#skills'
            onClick={() => setIsOpen(false)}
            className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary duration-300 ease-in-out'
          >
            🛠️ Skills
          </a>
          <a
            href='#projects'
            onClick={() => setIsOpen(false)}
            className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary duration-300 ease-in-out'
          >
            🚀 Projects
          </a>
        </nav>
      </div>
    </div>
  );
};
