import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { User, Search, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-evenly items-center px-6 lg:px-10">
      
      {/* Logo */}
      <div className="flex items-center">
        <Image src="/logo-img.jpg" alt="Logo" width={186} height={41} className="hidden md:block" />
        <Image src="/logo-img.jpg" alt="Logo" width={120} height={30} className="md:hidden" />
      </div>

      {/* Navigation Links */}
      <ul className=" md:flex gap-8 lg:gap-16 text-black font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/shop">Shop</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/shopnow">Shopnow</Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="flex gap-4 md:gap-6 items-center">
        <Link href="/myaccount">
        <User className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
        </Link>
        <Search className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
        <Heart className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
        <Link href="/cart">
        <ShoppingCart className="cursor-pointer w-5 h-5 md:w-6 md:h-6" />
        </Link>
      </div>

     
    </div>
  );
};

export default Header;