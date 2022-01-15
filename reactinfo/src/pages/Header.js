import React from 'react';

function Header() {
  return (
    <header>
      <nav className='flex justify-between  shadow'>
        <img src='/images/react-logo.png' alt='react-logo' className='w-10' />
        <ul className='flex space-x-2 items-center text-lg font-medium px-4 cursor-pointer'>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
