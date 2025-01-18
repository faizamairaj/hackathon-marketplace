import React from 'react'
import Image from 'next/image';
const Product2 = () => {
  return (
    <div>
      <div className='flex flex-col justify-center items-center mt-10'>
        <p className='font-bold text-gray-500'>Share your Setup With</p>
        <h1 className=' text-4xl font-extrabold mt-5'>#FuniroFurniture</h1>
      </div>

      <div className='flex justify-center items-center'>
        <Image src={'/card12-img.jpg'} alt='' width={1377} height={656}/>
      </div>

      <div className='mt-10 w-full h-1 bg-gray-300'>
        <hr/>
      </div>
    </div>
  );
}

export default Product2;