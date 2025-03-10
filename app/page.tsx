import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen'>
      <header className='bg-gradient-to-r from-cyan-500 to-slate-500 shadow-sky-300'>
        <div className='maxw-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            {/* logo */}
            <div className='flex items-end gap-2 text-sm font-semibold'>
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                width={40}
                height={24}
                className='animate-pulse transition duration-300 ease-in-out'
              />
            </div>
            {/* Menu */}
            <nav className='flex items-center gap-4'>
              <Link href='#' className='text-xl hover:text-emerald-400'>
                Home
              </Link>
              <Link href='#about' className='text-xl hover:text-emerald-400'>
                About
              </Link>
              <Link href='#features' className='text-xl hover:text-emerald-400'>
                Features
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <h1>Home</h1>
    </div>
  );
}
