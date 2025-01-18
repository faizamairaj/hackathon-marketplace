import React from 'react';
import Image from 'next/image';
const Product = () => {
  return (
    <div className='flex justify-center items-center'>
      <Image src={'/card13-img.jpg'} alt='' width={1488} height={670}/>
    </div>
  );
}

export default Product;