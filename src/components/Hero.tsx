import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="mt-4 mx-4 sm:mx-12 lg:mx-48">
      <Image
        src="/hero-img.jpg"
        alt="hero-img"
        width={1440}
        height={700}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default Hero;