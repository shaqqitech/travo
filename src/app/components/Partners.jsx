import React from 'react';
import { SiPaytm, SiEmirates, SiNike, SiPuma, SiZara, SiTiktok } from 'react-icons/si';

const Partners = () => {
  return (
    <main className='w-full h-auto md:h-48 flex flex-col justify-center items-center px-4 md:px-24 text-slate-500 text-3xl md:text-5xl space-y-5 md:space-y-9 font-bold'>
      <h1>Partners</h1>
      <div className='w-full flex flex-wrap justify-center items-center space-x-3 md:space-x-16 lg:space-x-24'>
        <SiPaytm className='w-02 md:w-auto h-12 md:h-auto' />
        <SiEmirates className='w-10 md:w-auto h-12 md:h-auto' />
        <SiNike className='w-10 md:w-auto h-12 md:h-auto' />
        <SiPuma className='w-10 md:w-auto h-12 md:h-auto' />
        <SiZara className='w-10 md:w-auto h-12 md:h-auto' />
        <SiTiktok className='w-10 md:w-auto h-12 md:h-auto' />
      </div>
    </main>
  );
};

export default Partners;
