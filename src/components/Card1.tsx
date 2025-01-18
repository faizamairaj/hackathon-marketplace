import React from 'react';
import Image from 'next/image';

const Card1 = () => {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-semibold text-center mt-5">Our Products</h1>

    
      <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
        <div className="w-full sm:w-auto">
          <Image src={'/card4-img.jpg'} alt="card4-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>

        <div className="w-full sm:w-auto">
          <Image src={'/card5-img.jpg'} alt="card5-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>

        <div className="w-full sm:w-auto">
          <Image src={'/card6-img.jpg'} alt="card6-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>

        <div className="w-full sm:w-auto">
          <Image src={'/card7-img.jpg'} alt="card7-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>
      </div>

    
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        <div className="w-full sm:w-auto">
          <Image src={'/card8-img.jpg'} alt="card8-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>

        <div className="w-full sm:w-auto">
          <Image src={'/card9-img.jpg'} alt="card9-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>

        <div className="w-full sm:w-auto">
          <Image src={'/card11-img.jpg'} alt="card11-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>

        <div className="w-full sm:w-auto">
          <Image src={'/card10-img.jpg'} alt="card10-img" width={285} height={446} className="mx-auto sm:mx-0" />
        </div>
      </div>

    
      <div className="w-full text-center mt-8">
        <button className="font-bold text-[#B88E2F] border hover:bg-yellow-200 border-[#B88E2F] p-4 w-48 mx-auto">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Card1;