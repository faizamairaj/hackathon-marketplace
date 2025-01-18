import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white w-full flex flex-wrap justify-between items-start px-6 py-8 lg:flex-nowrap lg:justify-evenly lg:px-10 lg:py-16'>

      {/* Brand Section */}
      <div className='flex flex-col mb-8 lg:mb-0'>
        <h1 className='font-extrabold text-2xl lg:text-3xl text-black mb-4'>Funiro</h1>
        <ul className='space-y-1 text-gray-400 text-sm lg:text-base'>
          <li>400 University Drive</li>
          <li>200 Coral Gobles,</li>
          <li>FL 33134 USA</li>
        </ul>
      </div>

      {/* Links Section */}
      <div className='mb-8 lg:mb-0'>
        <h2 className='text-gray-400 mb-2 lg:mb-4 text-sm lg:text-base'>Links</h2>
        <ul className='space-y-3 text-black text-sm lg:text-base'>
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Help Section */}
      <div className='mb-8 lg:mb-0'>
        <h2 className='text-gray-400 mb-2 lg:mb-4 text-sm lg:text-base'>Help</h2>
        <ul className='space-y-3 text-black text-sm lg:text-base'>
          <li>Payment Options</li>
          <li>Returns</li>
          <li>Privacy Policies</li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div className='flex flex-col items-start lg:items-center'>
        <p className='text-gray-400 mb-4 lg:mb-12 text-sm lg:text-base'>Newsletter</p>
        <div className='flex flex-col items-start lg:flex-row lg:items-center gap-2'>
          <input 
            type='email' 
            placeholder='Enter Your Email Address' 
            className='text-gray-400 border border-gray-300 p-2 text-sm lg:text-base'
          />
          <button className='bg-black text-white px-4 py-2 text-sm lg:text-base'>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;