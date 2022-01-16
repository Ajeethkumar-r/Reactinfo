import React from 'react';

function Header() {
  return (
    <header>
      <nav className='flex justify-between p-2 py-4 bg-slate-900 shadow shadow-current'>
        <div className='flex font-semibold items-center'>
          <img
            src='/images/react-logo.png'
            alt='react-logo'
            className='w-6 mr-1'
          />
          <span className='text-cyan-300 text-xl'>ReactFacts</span>
        </div>
        <div className='flex space-x-2 items-center text-white text-sm cursor-pointer'>
          React Course-Project 1
        </div>
      </nav>
    </header>
  );
}

export default Header;
