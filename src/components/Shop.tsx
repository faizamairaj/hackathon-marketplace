import React from 'react';
import Image from 'next/image';

const Shop = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header Image */}
      <Image
        src={'/shop-frame.jpg'}
        alt="shop-img"
        width={1440}
        height={316}
        className="mx-auto w-full max-w-screen-lg"
      />

      <div className="p-4">
        <h1 className="text-2xl sm:text-4xl font-semibold text-center mt-5">
          Our Products
        </h1>

        {/* Product Row 1 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-5">
          <div className="flex justify-center">
            <Image
              src={'/card4-img.jpg'}
              alt="card4-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={'/card5-img.jpg'}
              alt="card5-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={'/card6-img.jpg'}
              alt="card6-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={'/card7-img.jpg'}
              alt="card7-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>
        </div>

        {/* Product Row 2 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 mt-10">
          <div className="flex justify-center">
            <Image
              src={'/card8-img.jpg'}
              alt="card8-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={'/card9-img.jpg'}
              alt="card9-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={'/card11-img.jpg'}
              alt="card11-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={'/card10-img.jpg'}
              alt="card10-img"
              width={285}
              height={446}
              className="max-w-full"
            />
          </div>
        </div>

        {/* Show More Button */}
        <div className="w-full text-center mt-8">
          <button className="font-bold text-[#B88E2F] border hover:bg-yellow-200 border-[#B88E2F] p-4 w-full sm:w-48 mx-auto">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;